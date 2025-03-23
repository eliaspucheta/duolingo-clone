import { SimpleForm, Edit, SelectInput, TextInput, required, ReferenceInput, NumberInput } from "react-admin";

export const ChallengeEdit = () => {
  return (
    <Edit>
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
    </Edit>
  );
};