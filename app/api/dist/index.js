"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

// src/app.ts
var import_express3 = __toESM(require("express"));
var import_morgan = __toESM(require("morgan"));
var import_cors = __toESM(require("cors"));

// src/util/DatabaseUtil.ts
var import_mongoose = __toESM(require("mongoose"));
function ConnectDB() {
  if (!process.env.MONGO_LOCAL) return;
  import_mongoose.default.connect(process.env.MONGO_LOCAL).then((value) => {
    console.log("[STATUS] Database Connected");
  }).catch((error) => {
    console.error("[ERROR] Connection failed");
    console.log(error);
  });
}

// src/routes/adminRouter.ts
var import_express = require("express");
var import_axios = __toESM(require("axios"));

// src/persistent/CoursePersistence.ts
var import_mongoose2 = __toESM(require("mongoose"));
var course = new import_mongoose2.default.Schema({
  code: { type: String },
  title: { type: String },
  description: { type: String },
  instructors: { type: String },
  waitlist_capacity: { type: String },
  enrolled_capacity: { type: String },
  credits: Number,
  subject: { type: String },
  academic_level: { type: String },
  academic_terms_pattern: { type: [String] },
  offering_periods: { type: [String] },
  academic_period: { type: String },
  course_tags: [String]
  // String array
});
var Course = import_mongoose2.default.model("Course", course, "courses");
var CoursePersistence_default = Course;

// src/persistent/SectionPersistence.ts
var import_mongoose3 = __toESM(require("mongoose"));
var subject = new import_mongoose3.default.Schema({
  locations: { type: String },
  instructional_format: { type: String },
  delivery_mode: { type: String },
  course: { type: String },
  section_code: { type: String },
  section_status: { type: String },
  section_start_date: { type: String },
  section_end_date: { type: String },
  section_start_time: { type: String },
  section_end_time: { type: String },
  meeting_day_patterns: { type: String },
  offering_period: { type: String }
});
var Section = import_mongoose3.default.model("Section", subject, "sections");
var SectionPersistence_default = Section;

// src/persistent/SubjectPersistence.ts
var import_mongoose4 = __toESM(require("mongoose"));
var subject2 = new import_mongoose4.default.Schema(
  {
    type: String,
    code: String,
    department: String,
    category: String
  },
  { _id: false }
);
var Subject = import_mongoose4.default.model("Subject", subject2, "subjects");
var SubjectPersistence_default = Subject;

// src/routes/adminRouter.ts
var router = (0, import_express.Router)();
router.get("/populate_database", (req, res) => __async(void 0, null, function* () {
  try {
    const response = yield (0, import_axios.default)({
      method: "get",
      url: "https://courselistings.wpi.edu/assets/prod-data.json",
      responseType: "json"
    });
    const subjects = {};
    response.data.Report_Entry.map((courseData) => {
      const subject3 = courseData.Subject.split("; ")[0];
      const code = courseData.Course_Title.split(" ")[0];
      if (!subjects[code]) {
        subjects[code] = {
          type: subject3,
          code: courseData.Course_Title.split(" ")[0],
          department: courseData.Course_Section_Owner,
          category: determineSubjectCategory(subject3, courseData.Course_Section_Owner)
        };
      }
    });
    yield SubjectPersistence_default.deleteMany({});
    console.log("[STATUS] Database successfully dumped.");
    const subjects_data = yield SubjectPersistence_default.insertMany(Object.values(subjects));
    if (subjects_data) {
      console.log("[STATUS] Data successfully added");
    }
    const courses = {};
    const sections = [];
    const timeRangeRegex = /([0-1])*([0-9]):([0-5]){2}( )*(AM|PM)/g;
    const classSectionRegex = /([A-Z]){1,}( )*([0-9]){2,}(-)*/g;
    const sortedCourses = response.data.Report_Entry.sort(
      (a, b) => {
        if (a.Course_Title > b.Course_Title) return 1;
        else if (a.Course_Title < b.Course_Title) return -1;
        return 0;
      }
    );
    for (let i = 0; i < sortedCourses.length; i++) {
      const courseData = sortedCourses[i];
      const [code, title] = courseData.Course_Title.split(" - ");
      const [code_abbrev, code_number] = code.split(" ");
      const terms = /* @__PURE__ */ new Set();
      const offeringPeriod = /* @__PURE__ */ new Set();
      for (let j = i; j < sortedCourses.length - 1; j++) {
        const sectionData = sortedCourses[j];
        SubjectPersistence_default.findOne({ code: code_abbrev }).then((subject3) => {
          let section_start_time = "", section_end_time = "";
          let section_code = "";
          const section_time_matches = sectionData.Section_Details.match(timeRangeRegex);
          if (section_time_matches) {
            [section_start_time, section_end_time] = section_time_matches;
          }
          const section_code_matches = sectionData.Course_Section.match(classSectionRegex);
          if (section_code_matches) {
            section_code = section_code_matches[1];
          }
          sections.push({
            locations: sectionData.Locations,
            instructional_format: sectionData.Instructional_Format,
            meeting_day_patterns: sectionData.Meeting_Day_Patterns,
            delivery_mode: sectionData.Delivery_Mode,
            course: code_abbrev + code_number,
            section_code,
            section_status: sectionData.Section_Status,
            section_start_date: sectionData.Course_Section_Start_Date,
            section_end_date: sectionData.Course_Section_End_Date,
            section_start_time,
            section_end_time,
            offering_period: sectionData.Offering_Period
          });
        });
        const offering_period = sectionData.Offering_Period;
        if (!offeringPeriod.has(offering_period)) {
          offeringPeriod.add(offering_period);
        }
        const term = sectionData.Offering_Period.replace(
          /([0-9]){1,4}\s*(Spring|Fall)*/g,
          ""
        ).replace(/Term/g, "").trim();
        if (!terms.has(term)) {
          terms.add(term);
        }
        if (sortedCourses[j + 1].Course_Title !== courseData.Course_Title) {
          i = j;
          break;
        }
      }
      if (!courses[`${code_abbrev}${code_number}`]) {
        courses[`${code_abbrev}${code_number}`] = {
          code: code_number,
          title,
          description: courseData.Course_Description.replace(
            /<br\s*\/>/g,
            " "
          ).replace(/<(\/)*([a-z])*\s*([a-z]:\s*(")*[a-z]("*))*\s*>/g, ""),
          instructors: courseData.Instructors,
          waitlist_capacity: courseData.Waitlist_Waitlist_Capacity,
          enrolled_capacity: courseData.Enrolled_Capacity,
          credits: Number(courseData.Credits),
          subject: code_abbrev,
          academic_level: courseData.Academic_Level,
          academic_terms_pattern: Array.from(terms),
          offering_periods: Array.from(terms),
          academic_period: courseData.Starting_Academic_Period_Type,
          course_tags: courseData.Course_Tags.split(" :: ")
        };
      }
    }
    yield SectionPersistence_default.deleteMany({});
    console.log("[STATUS] Database successfully dumped.");
    if (yield SectionPersistence_default.insertMany(sections)) {
      console.log("[STATUS] Data successfully added");
    }
    yield CoursePersistence_default.deleteMany({});
    console.log("[STATUS] Database successfully dumped.");
    if (yield CoursePersistence_default.insertMany(Object.values(courses))) {
      console.log("[STATUS] Data successfully added");
      res.send(JSON.stringify({ success: true }));
    }
  } catch (error) {
    console.error("[ERROR] Cannot get public course listing.");
    console.log(error);
    res.send(JSON.stringify({ success: false }));
  }
}));
function determineSubjectCategory(subjectName, department) {
  if (department.match(/social/i) || subjectName.match(/social/i)) {
    return "Social Science";
  }
  if (department.match(/engineering/i) || subjectName.match(/engineering/i)) {
    return "Engineering";
  }
  const scienceRegex = new RegExp(
    /science|/.source + /physic(s)*|/.source + /chemistry|/.source + /bio|biology|/.source + /math/.source,
    "i"
  );
  if (department.match(scienceRegex)) {
    return "Science";
  }
  const langRegex = new RegExp(
    /arabic|/.source + /chinese|/.source + /english|/.source + /german|/.source + /japanese|/.source + /spanish|/.source + /french|/.source + /vietnamese/.source,
    "i"
  );
  if (subjectName.match(langRegex)) {
    return "Language";
  }
  if (department.match(/humanities | art(s)*/ig)) {
    return "Humanities";
  }
  if (department.match(/business/ig)) {
    return "Business";
  }
  return "Others";
}
router.get("/dump/:type", (req, res) => __async(void 0, null, function* () {
  try {
    switch (req.params.type) {
      case "subject":
        {
          yield SubjectPersistence_default.deleteMany({});
          console.log("[STATUS] Database successfully dumped.");
        }
        break;
      case "course":
        {
          yield CoursePersistence_default.deleteMany({});
          console.log("[STATUS] Database successfully dumped.");
        }
        break;
    }
    res.send(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("[ERROR] Cannot get public course listing.");
    console.log(error);
    res.send(JSON.stringify({ success: false }));
  }
}));
var adminRouter_default = router;

// src/routes/dataRouter.ts
var import_express2 = require("express");
var import_fast_xml_parser = require("fast-xml-parser");
var router2 = (0, import_express2.Router)();
router2.get("/all", (req, res) => __async(void 0, null, function* () {
  try {
    const subjectData = yield SubjectPersistence_default.find(
      {},
      { _id: 0, __v: 0 },
      { lean: true }
    );
    const data = yield Promise.all(
      subjectData.map((subject3) => __async(void 0, null, function* () {
        const courses = yield getCourseData(subject3.code);
        return {
          $name: subject3.type,
          $abbrev: subject3.code,
          $department: subject3.department,
          $category: subject3.category,
          course: courses
        };
      }))
    );
    const builder = new import_fast_xml_parser.XMLBuilder({
      attributeNamePrefix: "$",
      ignoreAttributes: false,
      arrayNodeName: "subject",
      indentBy: "    ",
      format: true
    });
    const result = `<?xml version="1.0"?>
      <script>
        ${builder.build(data)}
      </script>
    `;
    res.set("Content-Type", "text/xml").send(result);
  } catch (error) {
    console.error("[ERROR] Cannot find section data.");
    console.log(error);
    res.send(JSON.stringify({ success: false }));
  }
}));
function getCourseData(subject_id) {
  return __async(this, null, function* () {
    const courseData = yield CoursePersistence_default.find(
      { subject: subject_id },
      { _id: 0, __v: 0 },
      { lean: true }
    );
    return yield Promise.all(
      courseData.map((course2) => __async(this, null, function* () {
        const course_id = course2.subject + course2.code;
        const sections = yield getSectionData(course_id);
        return {
          $description: course2.description,
          $name: course2.title,
          $number: course2.code,
          $credits: course2.credits,
          $enrolled: course2.enrolled_capacity,
          $waitlist: course2.waitlist_capacity,
          $academic_terms: course2.academic_terms_pattern.join(" "),
          $academic_period: course2.academic_period,
          section: sections
        };
      }))
    );
  });
}
function getSectionData(course_id) {
  return __async(this, null, function* () {
    const sectionData = yield SectionPersistence_default.find(
      { course: course_id },
      { _id: 0, __v: 0 },
      { lean: true }
    );
    return sectionData.map((section) => {
      return {
        $location: section.locations,
        $format: section.instructional_format,
        $code: section.section_code,
        $status: section.section_status
      };
    });
  });
}
var dataRouter_default = router2;

// src/app.ts
function initApp() {
  const app2 = (0, import_express3.default)();
  app2.use((0, import_morgan.default)("dev"));
  app2.use(import_express3.default.json());
  app2.use(import_express3.default.urlencoded({ extended: true }));
  app2.use(
    // Enabling CORs for all localhost origins
    (0, import_cors.default)({
      origin: /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/
    })
  );
  ConnectDB();
  app2.use("/src/admin/", adminRouter_default);
  app2.use("/src/data/", dataRouter_default);
  return app2;
}

// src/index.ts
var app = initApp();
app.listen(process.env.PORT, () => {
  console.log(`API server listening on port ${process.env.PORT}`);
});
var index_default = app;
