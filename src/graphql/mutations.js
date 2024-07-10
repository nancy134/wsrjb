/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createForm = /* GraphQL */ `
  mutation CreateForm(
    $input: CreateFormInput!
    $condition: ModelFormConditionInput
  ) {
    createForm(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      checkboxes
      textBox1
      textBox2
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateForm = /* GraphQL */ `
  mutation UpdateForm(
    $input: UpdateFormInput!
    $condition: ModelFormConditionInput
  ) {
    updateForm(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      checkboxes
      textBox1
      textBox2
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteForm = /* GraphQL */ `
  mutation DeleteForm(
    $input: DeleteFormInput!
    $condition: ModelFormConditionInput
  ) {
    deleteForm(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      checkboxes
      textBox1
      textBox2
      createdAt
      updatedAt
      __typename
    }
  }
`;
