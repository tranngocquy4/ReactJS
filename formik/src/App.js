import logo from './logo.svg';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
function App() {
    return (
      <>
        <Formik
          initialValues={{name:"",CCCD:"",year:"",picked:"",quoctich:"",cty:"",job:"",bhyt:""}}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validate={values=>{
            const errors = {}
            if (values.name == "") {
              errors.name = "Tên không được rỗng"
            }
            if (values.CCCD == "") {
              errors.CCCD = "Căn cước công dân không được rỗng"
            }if (values.year == "") {
              errors.year = "Năm không được rỗng"
            }
            return errors
          }}
        >
          <Form>
            <div>
              <b>
              Họ và tên
              </b>
            </div>
            <Field name="name" type="text"/><br/>
            <ErrorMessage name="name" style={{color:"red"}} component="div"/>
            <div>
              <b>Căn cước công dân</b>
              </div>
            <Field name="CCCD" type="number" /><br/>
            <ErrorMessage name="CCCD" style={{color:"red"}} component="div"/>
            <div>
              <b>
              Năm sinh
              </b>
              </div>
            <Field name="year" type="number" /><br/>
            <ErrorMessage name="year" style={{color:"red"}} component="div"/>
            <div>Giới tính</div>
            <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="One" />
              Nam
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Nữ
            </label>
            </div>
            <div>
              <b>
              Quốc Tịch
              </b>
            </div>
              <Field name="quoctich" type="text"></Field><br/>
            <div>Công ty làm việc </div>
              <Field name="cty" type="text"></Field><br/>
            <div>Bộ phận làm việc</div>
              <Field name="job" type="text"></Field><br/>
            <div>Có thẻ bảo hiểm y tế</div>
            <label>
              <Field name="bhyt" type="checkbox"/>Có
              </label>
              <br/>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </>
    )
}
export default App;