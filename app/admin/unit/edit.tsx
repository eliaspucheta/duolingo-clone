import { SimpleForm, Edit, TextInput, required, ReferenceInput, NumberInput } from "react-admin";

export const UnitEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput
          source="id"
          validate={[required()]}
          label="Id"
        />
        <TextInput
          source="title"
          validate={[required()]}
          label="Titulo"
        />
        <TextInput
          source="description"
          validate={[required()]}
          label="Descripción"
        />
        <ReferenceInput
          source="courseId"
          reference="cursos"
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