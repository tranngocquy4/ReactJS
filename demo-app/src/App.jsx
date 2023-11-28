import './App.css';
function App() {
  const checkAge = () => {
    let a = 2023;
    let b = 2004;
    if (a - b > 22) {
     return  <p className="a">Tôi là developer</p>
    }else {
      return <p className="c">Tôi là sờ tiu đừn</p>
    }
  }
  const persons = [
    { id: 1, name: 'Tran Ngoc Quy', age: 19},
    { id: 2, name: 'Tran Ngoc Thuy Tien', age: 18},
    { id: 3, name: 'Tran Ngoc Phuong', age: 24}

  ]
  return (
    <>
        {checkAge()}
        <ul>
         {persons.map(bla => {
          return (
            <li>{bla.id} -- {bla.name} -- {bla.age}</li> 
          )
         })}
        </ul>
    </>
  );
}
export default App;
// {bla => { ... }} là một hàm callback, được gọi cho mỗi phần tử trong mảng persons.
//  Đối số bla trong hàm callback đại diện cho mỗi phần tử trong mảng persons.
