import gql from 'graphql-tag';

// We use the gql tag to parse our query string into a query document
export const removeMessagesMutation = gql`
  mutation RemoveMessages($chatId: ID!, $messagesIds: [ID!]) {
    removeMessages(chatId: $chatId, messagesIds: $messagesIds)
  }
`;
