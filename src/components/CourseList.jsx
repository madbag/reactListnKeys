const courses = [
    'Web Development', 
    'Data Analytics', 
    'UI/UX Design', 
    'Cyber Security'
];

function CourseList () {
    return (
        <div>
            <div className="list">
            <h2> Course List</h2>

            {courses.map(courseName => {
                return <p> {courseName}</p>
            })}
            </div>
        </div>
    )
}

export default CourseList;