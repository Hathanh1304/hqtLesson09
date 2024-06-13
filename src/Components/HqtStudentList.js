import React from "react"

export default function HqtStudentList({renderHqtStudentList}){
    console.log("Data:",renderHqtStudentList);
    let hqtElement = renderHqtStudentList.map((hqtStudent, index)=>{
        return (
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{hqtStudent.hqtId}</td>
            <td>{hqtStudent.hqtName}</td>
            <td>{hqtStudent.hqtAge}</td>
            <td>{hqtStudent.hqtPhone}</td>
            <td>{hqtStudent.hqtEmail}</td>
            <td>{hqtStudent.hqtStatus}</td>
            <td>
                Edit / Delete
            </td>
          </tr>
        )
    });

    return(
        <div>
            <h2> Danh sach sinh vien</h2>
            <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Ma sinh vien</th>
      <th scope="col">Ho Ten</th>
      <th scope="col">Tuoi</th>
      <th scope="col">Dien Thoai</th>
      <th scope="col">Email</th>
      <th scope="col">Trang Thai</th>
      <th scope="col">Chuc Nang</th>
    </tr>
  </thead>
  <tbody>
    {hqtElement}
  </tbody>
</table>
        </div>
    )
}