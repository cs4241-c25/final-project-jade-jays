import { Router, Request, Response } from 'express'
import axios from 'axios'

import Course from '../persistent/CoursePersistence.js'
import { RawCourseType, CourseType } from '../util/persistent.types'

const router: Router = Router({});

// this should be called nightly by the server to ensure that the database is updated regularly
router.get('/course_listings', async (req: Request, res: Response) => {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://courselistings.wpi.edu/assets/prod-data.json',
            responseType: 'json',
        });

        const data:CourseType[] = [];
        response.data.Report_Entry.forEach((course_data: RawCourseType) => {
            data.push({
                title: course_data.Course_Title,
                locations: course_data.Locations,
                instructional_format: course_data.Instructional_Format,
                meeting_day_patterns: course_data.Meeting_Day_Patterns,
                delivery_mode: course_data.Delivery_Mode,
                description: course_data.Course_Description,
                instructors: course_data.Instructors,
                waitlist_capacity: course_data.Waitlist_Waitlist_Capacity,
                enrolled_capacity: course_data.Enrolled_Capacity,
                credits: Number(course_data.Credits),
                subject: course_data.Subject,
                academic_level: course_data.Academic_Level,
                section: course_data.Course_Section,
                section_status: course_data.Section_Status,
                section_start_date: course_data.Course_Section_Start_Date,
                section_end_date: course_data.Course_Section_End_Date,
                section_details: course_data.Section_Details,
                offer_period: course_data.Offering_Period,
                academic_period: course_data.Starting_Academic_Period_Type,
                course_tags: course_data.Course_Tags.split(' :: '),
            });
        });

        const course = await Course.insertMany(data);
        console.log(course);
        res.send(JSON.stringify({ success: true }));
    } catch (error) {
        console.error("[ERROR] Cannot get public course listing.");
        console.log(error);
        res.send(JSON.stringify({ success: false }));
    }
});


export default router;