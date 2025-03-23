import { SimpleForm, Create, SelectInput, TextInput, required, ReferenceInput, NumberInput } from "react-admin";

export const ChallengeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput
          source="question"
          validate={[required()]}
          label="Pregunta"
        />
        <SelectInput
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT"
            },
            {
              id:"ASSIST",
              name: "ASSIST"
            }
          ]}
          validate={[required()]}
        />
        <ReferenceInput
          source="lessonId"
          reference="lessons"
        />
        <NumberInput
          source="order"
          validate={[required()]}
          label="Orden"
        />
      </SimpleForm>
    </Create>
  );
};