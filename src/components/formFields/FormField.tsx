import { SetStateAction, useEffect, useState } from "react";
import Checkbox from "../inputs/CheckBox";
import UploadButton from "../UploadButton/UploadButton";
import FieldsNames from "../../assets/fieldsNames";
import {PlusOutlined} from '@ant-design/icons';
import { Form, Card, Divider, Switch, Button } from "antd";
import "./styles.css";

const FormField = () => {
  const [data, setData] = useState<any["data"] | null>(null);
  const [open, setOpen] = useState(false);
  const [fieldName, setFieldName] = useState('');

  useEffect(() => {
    setData(FieldsNames.data);
  }, []);

  const addBTNHandler = () => {
    // Add your logic here
    let newData = {...data}; // create a copy of the data state
    newData.attributes.personalInformation['newField'] = { show: true, internalUse: false }; // add a new field
    setData(newData); // update the state with the new data
  }

  const openForm = (name: SetStateAction<string>) => {
    setOpen(true);
    setFieldName(name);
  };

  return (
    <Form>
      {/* image upload */}
      <Card title="upload an Image" className="custom-card">
        <UploadButton />
      </Card>

      {/*personal info */}
      <Card title="Personal Information" className="custom-card">
        {data?.attributes?.personalInformation &&
          Object.keys(data.attributes.personalInformation).map((keys) => (
          <div>
            <div key={keys} className="Box">
              <h1 className="leading">{keys}</h1>
              <Checkbox
                checked={
                  data.attributes.personalInformation[keys]?.show
                }
                label="internal"
              />
              <Switch
                defaultChecked={
                  data.attributes.personalInformation[keys]
                    ?.internalUse
                }
              />
              <span>
                {data.attributes.personalInformation[keys]?.internalUse
                  ? "Show"
                  : "hide"}
              </span>

            </div>
            <Divider />
            </div>
          ))}
            <Button
                type="text"
                onClick={() => openForm('Add New')}
                style={{ width: '25%', marginTop: '20px' }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
      </Card>

     {/* profile */}
     <Card title="Profile" className="custom-card">
        {data?.attributes?.profile &&
          Object.keys(data.attributes.profile).map((key) => {
            if (key !== "profileQuestions") {
              return (
                <div>
                <div key={key} className="Box">
                  <h1 className="leading">{key}</h1>
                  <Checkbox
                    checked={data.attributes.profile[key]?.show}
                    label="Mandatory"
                  />
                  <Switch
                    checked={data.attributes.profile[key]?.mandatory}
                  />
                  <span>
                    {data.attributes.profile[key]?.mandatory
                      ? "Show"
                      : "hide"}
                  </span>
                </div>
                <Divider />

                </div>
              );
            }
          })}
          <Button
                type="text"
                onClick={() => openForm('myField')}
                style={{ width: '25%', marginTop: '20px' }}
                icon={<PlusOutlined />}
              >
                Open form
              </Button>
      </Card>

     {/* profile */}
     <Card title="Profile" className="custom-card">
        {data?.attributes?.profile &&
          Object.keys(data.attributes.profile).map((key) => {
            if (key !== "profileQuestions") {
              return (
                <div>
                <div key={key} className="Box">
                  <h1 className="leading">{key}</h1>
                  <Checkbox
                    checked={data.attributes.profile[key]?.show}
                    label="Mandatory"
                  />
                  <Switch
                    checked={data.attributes.profile[key]?.mandatory}
                  />
                  <span>
                    {data.attributes.profile[key]?.mandatory
                      ? "Show"
                      : "hide"}
                  </span>
                </div>
                <Divider />

                </div>
              );
            }
          })}
          {open && (
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor={fieldName}>{fieldName}</label>
              <input id={fieldName} name={fieldName} type="text" />
              <button type="submit">Submit</button>
            </form>
          )}
      </Card>

      <Card title="Additional questions" className="custom-card">
        {data?.attributes?.customisedQuestions?.map(
          (question: any, index: string) => (
            <div key={index}>
              <h1>{question.question}</h1>
              <p>{question.choices.join(", ")}</p>
              <Checkbox checked={!question.disqualify} label="Mand"/>
              <Switch checked={question.other} />
              <Divider />
            </div>
          )
        )
      }
        <Button
                type="text"
                onClick={addBTNHandler}
                style={{ width: '25%', marginTop: '20px' }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
      </Card>
    </Form>
  );
};

export default FormField;
