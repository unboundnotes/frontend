// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UUID: string;
  Upload: any;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateWorkspaceInput = {
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
};

export type InputError = {
  __typename?: 'InputError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationsRoot = {
  __typename?: 'MutationsRoot';
  createUser: User;
  createWorkspace: WithError;
  deleteWorkspace: Scalars['Boolean'];
  loginUser: Scalars['String'];
};


export type MutationsRootCreateUserArgs = {
  user: CreateUserInput;
};


export type MutationsRootCreateWorkspaceArgs = {
  workspace: CreateWorkspaceInput;
};


export type MutationsRootDeleteWorkspaceArgs = {
  uuid: Scalars['UUID'];
};


export type MutationsRootLoginUserArgs = {
  login: LoginUserInput;
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  currentUser?: Maybe<User>;
  getAllWorkspaces: Array<Workspace>;
  getUser?: Maybe<User>;
  getWorkspace?: Maybe<Workspace>;
};


export type QueryRootGetUserArgs = {
  uuid: Scalars['UUID'];
};


export type QueryRootGetWorkspaceArgs = {
  uuid: Scalars['UUID'];
};

export type User = {
  __typename?: 'User';
  /** The user's email address. */
  email: Scalars['String'];
  /** The user's username. */
  username: Scalars['String'];
  /** The user's unique identifier. */
  uuid: Scalars['UUID'];
};

export type WithError = {
  __typename?: 'WithError';
  errors: Array<InputError>;
  value?: Maybe<Workspace>;
};

export type Workspace = {
  __typename?: 'Workspace';
  /** The workspace's image or icon. */
  image: Scalars['String'];
  /** The workspace's name. */
  name: Scalars['String'];
  /** The workspace's unique identifier. */
  uuid: Scalars['UUID'];
};

export type CreateWorkspaceMutationVariables = Exact<{
  name: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
}>;


export type CreateWorkspaceMutation = { __typename?: 'MutationsRoot', createWorkspace: { __typename?: 'WithError', errors: Array<{ __typename?: 'InputError', field: string, message: string }> } };

export type DeleteWorkspaceMutationVariables = Exact<{
  uuid: Scalars['UUID'];
}>;


export type DeleteWorkspaceMutation = { __typename?: 'MutationsRoot', deleteWorkspace: boolean };

export type GetUserQueryVariables = Exact<{
  uuid: Scalars['UUID'];
}>;


export type GetUserQuery = { __typename?: 'QueryRoot', getUser?: { __typename?: 'User', uuid: string, email: string, username: string } | null };

export type GetAllWorkspacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWorkspacesQuery = { __typename?: 'QueryRoot', getAllWorkspaces: Array<{ __typename?: 'Workspace', uuid: string, name: string, image: string }> };


export const CreateWorkspaceDocument = gql`
    mutation createWorkspace($name: String!, $image: Upload) {
  createWorkspace(workspace: {name: $name, image: $image}) {
    errors {
      field
      message
    }
  }
}
    `;
export type CreateWorkspaceMutationFn = Apollo.MutationFunction<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;

/**
 * __useCreateWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkspaceMutation, { data, loading, error }] = useCreateWorkspaceMutation({
 *   variables: {
 *      name: // value for 'name'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>(CreateWorkspaceDocument, options);
      }
export type CreateWorkspaceMutationHookResult = ReturnType<typeof useCreateWorkspaceMutation>;
export type CreateWorkspaceMutationResult = Apollo.MutationResult<CreateWorkspaceMutation>;
export type CreateWorkspaceMutationOptions = Apollo.BaseMutationOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;
export const DeleteWorkspaceDocument = gql`
    mutation deleteWorkspace($uuid: UUID!) {
  deleteWorkspace(uuid: $uuid)
}
    `;
export type DeleteWorkspaceMutationFn = Apollo.MutationFunction<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;

/**
 * __useDeleteWorkspaceMutation__
 *
 * To run a mutation, you first call `useDeleteWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkspaceMutation, { data, loading, error }] = useDeleteWorkspaceMutation({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useDeleteWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>(DeleteWorkspaceDocument, options);
      }
export type DeleteWorkspaceMutationHookResult = ReturnType<typeof useDeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationResult = Apollo.MutationResult<DeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationOptions = Apollo.BaseMutationOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;
export const GetUserDocument = gql`
    query getUser($uuid: UUID!) {
  getUser(uuid: $uuid) {
    uuid
    email
    username
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetAllWorkspacesDocument = gql`
    query getAllWorkspaces {
  getAllWorkspaces {
    uuid
    name
    image
  }
}
    `;

/**
 * __useGetAllWorkspacesQuery__
 *
 * To run a query within a React component, call `useGetAllWorkspacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllWorkspacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllWorkspacesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllWorkspacesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllWorkspacesQuery, GetAllWorkspacesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllWorkspacesQuery, GetAllWorkspacesQueryVariables>(GetAllWorkspacesDocument, options);
      }
export function useGetAllWorkspacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllWorkspacesQuery, GetAllWorkspacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllWorkspacesQuery, GetAllWorkspacesQueryVariables>(GetAllWorkspacesDocument, options);
        }
export type GetAllWorkspacesQueryHookResult = ReturnType<typeof useGetAllWorkspacesQuery>;
export type GetAllWorkspacesLazyQueryHookResult = ReturnType<typeof useGetAllWorkspacesLazyQuery>;
export type GetAllWorkspacesQueryResult = Apollo.QueryResult<GetAllWorkspacesQuery, GetAllWorkspacesQueryVariables>;