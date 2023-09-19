const students = ['Marc', 'Lucy', 'Anna'];

function StudentList (){
    return (
        <div className="list">
            <h2>Student List</h2>

            {students.map((name, index) => {
                return <p key={index}> 
                {name}
                </p>
            })}
        </div>
    )
    // console.log(students)
}

export default StudentList;