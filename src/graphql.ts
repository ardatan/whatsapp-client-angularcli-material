export type Maybe<T> = T | null;

export enum MessageType {
  Location = "LOCATION",
  Text = "TEXT",
  Picture = "PICTURE"
}

/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export namespace AddChat {
  export type Variables = {
    recipientId: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    addChat: Maybe<AddChat>;
  };

  export type AddChat = {
    __typename?: "Chat";

    messageFeed: Maybe<MessageFeed>;
  } & ChatWithoutMessages.Fragment;

  export type MessageFeed = {
    __typename?: "MessageFeed";

    hasNextPage: boolean;

    cursor: Maybe<string>;

    messages: (Maybe<Messages>)[];
  };

  export type Messages = Message.Fragment;
}

export namespace AddGroup {
  export type Variables = {
    recipientIds: string[];
    groupName: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    addGroup: Maybe<AddGroup>;
  };

  export type AddGroup = {
    __typename?: "Chat";

    messageFeed: Maybe<MessageFeed>;
  } & ChatWithoutMessages.Fragment;

  export type MessageFeed = {
    __typename?: "MessageFeed";

    hasNextPage: boolean;

    cursor: Maybe<string>;

    messages: (Maybe<Messages>)[];
  };

  export type Messages = Message.Fragment;
}

export namespace AddMessage {
  export type Variables = {
    chatId: string;
    content: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    addMessage: Maybe<AddMessage>;
  };

  export type AddMessage = Message.Fragment;
}

export namespace ChatAdded {
  export type Variables = {
    amount: number;
  };

  export type Subscription = {
    __typename?: "Subscription";

    chatAdded: Maybe<ChatAdded>;
  };

  export type ChatAdded = {
    __typename?: "Chat";

    messageFeed: Maybe<MessageFeed>;
  } & ChatWithoutMessages.Fragment;

  export type MessageFeed = {
    __typename?: "MessageFeed";

    hasNextPage: boolean;

    cursor: Maybe<string>;

    messages: (Maybe<Messages>)[];
  };

  export type Messages = Message.Fragment;
}

export namespace GetChat {
  export type Variables = {
    chatId: string;
    amount: number;
  };

  export type Query = {
    __typename?: "Query";

    chat: Maybe<Chat>;
  };

  export type Chat = {
    __typename?: "Chat";

    messageFeed: Maybe<MessageFeed>;
  } & ChatWithoutMessages.Fragment;

  export type MessageFeed = {
    __typename?: "MessageFeed";

    hasNextPage: boolean;

    cursor: Maybe<string>;

    messages: (Maybe<Messages>)[];
  };

  export type Messages = Message.Fragment;
}

export namespace GetChats {
  export type Variables = {
    amount: number;
  };

  export type Query = {
    __typename?: "Query";

    chats: Maybe<Chats[]>;
  };

  export type Chats = {
    __typename?: "Chat";

    messageFeed: Maybe<MessageFeed>;
  } & ChatWithoutMessages.Fragment;

  export type MessageFeed = {
    __typename?: "MessageFeed";

    hasNextPage: boolean;

    cursor: Maybe<string>;

    messages: (Maybe<Messages>)[];
  };

  export type Messages = Message.Fragment;
}

export namespace GetUsers {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    users: Maybe<Users[]>;
  };

  export type Users = {
    __typename?: "User";

    id: string;

    name: Maybe<string>;

    picture: Maybe<string>;
  };
}

export namespace MessageAdded {
  export type Variables = {
    chatId?: Maybe<string>;
  };

  export type Subscription = {
    __typename?: "Subscription";

    messageAdded: Maybe<MessageAdded>;
  };

  export type MessageAdded = {
    __typename?: "Message";

    chat: Chat;
  } & Message.Fragment;

  export type Chat = {
    __typename?: "Chat";

    id: string;
  };
}

export namespace MoreMessages {
  export type Variables = {
    chatId: string;
    amount: number;
    before: string;
  };

  export type Query = {
    __typename?: "Query";

    chat: Maybe<Chat>;
  };

  export type Chat = {
    __typename?: "Chat";

    messageFeed: Maybe<MessageFeed>;
  };

  export type MessageFeed = {
    __typename?: "MessageFeed";

    hasNextPage: boolean;

    cursor: Maybe<string>;

    messages: (Maybe<Messages>)[];
  };

  export type Messages = Message.Fragment;
}

export namespace RemoveAllMessages {
  export type Variables = {
    chatId: string;
    all?: Maybe<boolean>;
  };

  export type Mutation = {
    __typename?: "Mutation";

    removeMessages: Maybe<(Maybe<string>)[]>;
  };
}

export namespace RemoveChat {
  export type Variables = {
    chatId: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    removeChat: Maybe<string>;
  };
}

export namespace RemoveMessages {
  export type Variables = {
    chatId: string;
    messageIds?: Maybe<(Maybe<string>)[]>;
  };

  export type Mutation = {
    __typename?: "Mutation";

    removeMessages: Maybe<(Maybe<string>)[]>;
  };
}

export namespace ChatWithoutMessages {
  export type Fragment = {
    __typename?: "Chat";

    id: string;

    name: Maybe<string>;

    picture: Maybe<string>;

    allTimeMembers: AllTimeMembers[];

    unreadMessages: number;

    isGroup: boolean;
  };

  export type AllTimeMembers = {
    __typename?: "User";

    id: string;
  };
}

export namespace Message {
  export type Fragment = {
    __typename?: "Message";

    id: string;

    chat: Chat;

    sender: Sender;

    content: string;

    createdAt: DateTime;

    type: number;

    recipients: Recipients[];

    ownership: boolean;
  };

  export type Chat = {
    __typename?: "Chat";

    id: string;
  };

  export type Sender = {
    __typename?: "User";

    id: string;

    name: Maybe<string>;
  };

  export type Recipients = {
    __typename?: "Recipient";

    user: User;

    message: Message;

    chat: __Chat;

    receivedAt: Maybe<DateTime>;

    readAt: Maybe<DateTime>;
  };

  export type User = {
    __typename?: "User";

    id: string;
  };

  export type Message = {
    __typename?: "Message";

    id: string;

    chat: _Chat;
  };

  export type _Chat = {
    __typename?: "Chat";

    id: string;
  };

  export type __Chat = {
    __typename?: "Chat";

    id: string;
  };
}

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  users?: Maybe<User[]>;

  chats?: Maybe<Chat[]>;

  chat?: Maybe<Chat>;
}

export interface User {
  id: string;

  name?: Maybe<string>;

  picture?: Maybe<string>;

  phone?: Maybe<string>;
}

export interface Chat {
  /** May be a chat or a group */
  id: string;
  /** Computed for chats */
  name?: Maybe<string>;
  /** Computed for chats */
  picture?: Maybe<string>;
  /** All members, current and past ones. */
  allTimeMembers: User[];
  /** Whoever gets the chat listed. For groups includes past members who still didn't delete the group. */
  listingMembers: User[];
  /** Actual members of the group (they are not the only ones who get the group listed). Null for chats. */
  actualGroupMembers: User[];
  /** Null for chats */
  admins?: Maybe<User[]>;
  /** If null the group is read-only. Null for chats. */
  owner?: Maybe<User>;

  messages: (Maybe<Message>)[];
  /** Return messages in a a Feed Wrapper with cursor based pagination */
  messageFeed?: Maybe<MessageFeed>;
  /** Computed property */
  unreadMessages: number;
  /** Computed property */
  isGroup: boolean;
}

export interface Message {
  id: string;

  sender: User;

  chat: Chat;

  content: string;

  createdAt: DateTime;
  /** FIXME: should return MessageType */
  type: number;
  /** Whoever received the message */
  recipients: Recipient[];
  /** Whoever still holds a copy of the message. Cannot be null because the message gets deleted otherwise */
  holders: User[];
  /** Computed property */
  ownership: boolean;
}

export interface Recipient {
  user: User;

  message: Message;

  chat: Chat;

  receivedAt?: Maybe<DateTime>;

  readAt?: Maybe<DateTime>;
}

export interface MessageFeed {
  hasNextPage: boolean;

  cursor?: Maybe<string>;

  messages: (Maybe<Message>)[];
}

export interface Mutation {
  addChat?: Maybe<Chat>;

  addGroup?: Maybe<Chat>;

  removeChat?: Maybe<string>;

  addMessage?: Maybe<Message>;

  removeMessages?: Maybe<(Maybe<string>)[]>;

  addMembers?: Maybe<(Maybe<string>)[]>;

  removeMembers?: Maybe<(Maybe<string>)[]>;

  addAdmins?: Maybe<(Maybe<string>)[]>;

  removeAdmins?: Maybe<(Maybe<string>)[]>;

  setGroupName?: Maybe<string>;

  setGroupPicture?: Maybe<string>;

  markAsReceived?: Maybe<boolean>;

  markAsRead?: Maybe<boolean>;
}

export interface Subscription {
  messageAdded?: Maybe<Message>;

  chatAdded?: Maybe<Chat>;
}

// ====================================================
// Arguments
// ====================================================

export interface ChatQueryArgs {
  chatId: string;
}
export interface MessagesChatArgs {
  amount?: Maybe<number>;

  before?: Maybe<string>;
}
export interface MessageFeedChatArgs {
  amount?: Maybe<number>;

  before?: Maybe<string>;
}
export interface AddChatMutationArgs {
  recipientId: string;
}
export interface AddGroupMutationArgs {
  recipientIds: string[];

  groupName: string;
}
export interface RemoveChatMutationArgs {
  chatId: string;
}
export interface AddMessageMutationArgs {
  chatId: string;

  content: string;
}
export interface RemoveMessagesMutationArgs {
  chatId: string;

  messageIds?: Maybe<(Maybe<string>)[]>;

  all?: Maybe<boolean>;
}
export interface AddMembersMutationArgs {
  groupId: string;

  userIds: string[];
}
export interface RemoveMembersMutationArgs {
  groupId: string;

  userIds: string[];
}
export interface AddAdminsMutationArgs {
  groupId: string;

  userIds: string[];
}
export interface RemoveAdminsMutationArgs {
  groupId: string;

  userIds: string[];
}
export interface SetGroupNameMutationArgs {
  groupId: string;
}
export interface SetGroupPictureMutationArgs {
  groupId: string;
}
export interface MarkAsReceivedMutationArgs {
  chatId: string;
}
export interface MarkAsReadMutationArgs {
  chatId: string;
}
export interface MessageAddedSubscriptionArgs {
  chatId?: Maybe<string>;
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

// ====================================================
// GraphQL Fragments
// ====================================================

export const ChatWithoutMessagesFragment = gql`
  fragment ChatWithoutMessages on Chat {
    id
    name
    picture
    allTimeMembers {
      id
    }
    unreadMessages
    isGroup
  }
`;

export const MessageFragment = gql`
  fragment Message on Message {
    id
    chat {
      id
    }
    sender {
      id
      name
    }
    content
    createdAt
    type
    recipients {
      user {
        id
      }
      message {
        id
        chat {
          id
        }
      }
      chat {
        id
      }
      receivedAt
      readAt
    }
    ownership
  }
`;

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: "root"
})
export class AddChatGQL extends Apollo.Mutation<
  AddChat.Mutation,
  AddChat.Variables
> {
  document: any = gql`
    mutation AddChat($recipientId: ID!) {
      addChat(recipientId: $recipientId) {
        ...ChatWithoutMessages
        messageFeed {
          hasNextPage
          cursor
          messages {
            ...Message
          }
        }
      }
    }

    ${ChatWithoutMessagesFragment}
    ${MessageFragment}
  `;
}
@Injectable({
  providedIn: "root"
})
export class AddGroupGQL extends Apollo.Mutation<
  AddGroup.Mutation,
  AddGroup.Variables
> {
  document: any = gql`
    mutation AddGroup($recipientIds: [ID!]!, $groupName: String!) {
      addGroup(recipientIds: $recipientIds, groupName: $groupName) {
        ...ChatWithoutMessages
        messageFeed {
          hasNextPage
          cursor
          messages {
            ...Message
          }
        }
      }
    }

    ${ChatWithoutMessagesFragment}
    ${MessageFragment}
  `;
}
@Injectable({
  providedIn: "root"
})
export class AddMessageGQL extends Apollo.Mutation<
  AddMessage.Mutation,
  AddMessage.Variables
> {
  document: any = gql`
    mutation AddMessage($chatId: ID!, $content: String!) {
      addMessage(chatId: $chatId, content: $content) {
        ...Message
      }
    }

    ${MessageFragment}
  `;
}
@Injectable({
  providedIn: "root"
})
export class ChatAddedGQL extends Apollo.Subscription<
  ChatAdded.Subscription,
  ChatAdded.Variables
> {
  document: any = gql`
    subscription chatAdded($amount: Int!) {
      chatAdded {
        ...ChatWithoutMessages
        messageFeed(amount: $amount) {
          hasNextPage
          cursor
          messages {
            ...Message
          }
        }
      }
    }

    ${ChatWithoutMessagesFragment}
    ${MessageFragment}
  `;
}
@Injectable({
  providedIn: "root"
})
export class GetChatGQL extends Apollo.Query<GetChat.Query, GetChat.Variables> {
  document: any = gql`
    query GetChat($chatId: ID!, $amount: Int!) {
      chat(chatId: $chatId) {
        ...ChatWithoutMessages
        messageFeed(amount: $amount) {
          hasNextPage
          cursor
          messages {
            ...Message
          }
        }
      }
    }

    ${ChatWithoutMessagesFragment}
    ${MessageFragment}
  `;
}
@Injectable({
  providedIn: "root"
})
export class GetChatsGQL extends Apollo.Query<
  GetChats.Query,
  GetChats.Variables
> {
  document: any = gql`
    query GetChats($amount: Int!) {
      chats {
        ...ChatWithoutMessages
        messageFeed(amount: $amount) {
          hasNextPage
          cursor
          messages {
            ...Message
          }
        }
      }
    }

    ${ChatWithoutMessagesFragment}
    ${MessageFragment}
  `;
}
@Injectable({
  providedIn: "root"
})
export class GetUsersGQL extends Apollo.Query<
  GetUsers.Query,
  GetUsers.Variables
> {
  document: any = gql`
    query GetUsers {
      users {
        id
        name
        picture
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class MessageAddedGQL extends Apollo.Subscription<
  MessageAdded.Subscription,
  MessageAdded.Variables
> {
  document: any = gql`
    subscription messageAdded($chatId: ID) {
      messageAdded(chatId: $chatId) {
        ...Message
        chat {
          id
        }
      }
    }

    ${MessageFragment}
  `;
}
@Injectable({
  providedIn: "root"
})
export class MoreMessagesGQL extends Apollo.Query<
  MoreMessages.Query,
  MoreMessages.Variables
> {
  document: any = gql`
    query MoreMessages($chatId: ID!, $amount: Int!, $before: String!) {
      chat(chatId: $chatId) {
        messageFeed(amount: $amount, before: $before) {
          hasNextPage
          cursor
          messages {
            ...Message
          }
        }
      }
    }

    ${MessageFragment}
  `;
}
@Injectable({
  providedIn: "root"
})
export class RemoveAllMessagesGQL extends Apollo.Mutation<
  RemoveAllMessages.Mutation,
  RemoveAllMessages.Variables
> {
  document: any = gql`
    mutation RemoveAllMessages($chatId: ID!, $all: Boolean) {
      removeMessages(chatId: $chatId, all: $all)
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class RemoveChatGQL extends Apollo.Mutation<
  RemoveChat.Mutation,
  RemoveChat.Variables
> {
  document: any = gql`
    mutation RemoveChat($chatId: ID!) {
      removeChat(chatId: $chatId)
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class RemoveMessagesGQL extends Apollo.Mutation<
  RemoveMessages.Mutation,
  RemoveMessages.Variables
> {
  document: any = gql`
    mutation RemoveMessages($chatId: ID!, $messageIds: [ID]) {
      removeMessages(chatId: $chatId, messageIds: $messageIds)
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
