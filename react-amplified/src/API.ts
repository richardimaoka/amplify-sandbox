/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateBlogInput = {
  id?: string | null,
  name: string,
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  name: string,
  posts?:  Array<Post | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  blog?: Blog | null,
  comments?:  Array<Comment | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content?: string | null,
  post?: Post | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateSomethingInput = {
  id?: string | null,
  whatabout?: string | null,
};

export type ModelSomethingConditionInput = {
  whatabout?: ModelStringInput | null,
  and?: Array< ModelSomethingConditionInput | null > | null,
  or?: Array< ModelSomethingConditionInput | null > | null,
  not?: ModelSomethingConditionInput | null,
};

export type Something = {
  __typename: "Something",
  id: string,
  whatabout?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSomethingInput = {
  id: string,
  whatabout?: string | null,
};

export type DeleteSomethingInput = {
  id: string,
};

export type CreateInventoryInput = {
  productID: string,
  warehouseID: string,
  InventoryAmount: number,
};

export type ModelInventoryConditionInput = {
  InventoryAmount?: ModelIntInput | null,
  and?: Array< ModelInventoryConditionInput | null > | null,
  or?: Array< ModelInventoryConditionInput | null > | null,
  not?: ModelInventoryConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Inventory = {
  __typename: "Inventory",
  productID: string,
  warehouseID: string,
  InventoryAmount: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInventoryInput = {
  productID: string,
  warehouseID: string,
  InventoryAmount?: number | null,
};

export type DeleteInventoryInput = {
  productID: string,
  warehouseID: string,
};

export type CreateProjectInput = {
  id?: string | null,
  name?: string | null,
  projectTeamId?: string | null,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
  projectTeamId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name?: string | null,
  team?: Team | null,
  createdAt: string,
  updatedAt: string,
  projectTeamId?: string | null,
};

export type Team = {
  __typename: "Team",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  projectTeamId?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateTeamInput = {
  id?: string | null,
  name: string,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateNewInventoryInput = {
  productID: string,
  warehouseID: string,
  regionID: string,
  InventoryAmount: number,
};

export type ModelNewInventoryConditionInput = {
  InventoryAmount?: ModelIntInput | null,
  and?: Array< ModelNewInventoryConditionInput | null > | null,
  or?: Array< ModelNewInventoryConditionInput | null > | null,
  not?: ModelNewInventoryConditionInput | null,
};

export type NewInventory = {
  __typename: "NewInventory",
  productID: string,
  warehouseID: string,
  regionID: string,
  InventoryAmount: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNewInventoryInput = {
  productID: string,
  warehouseID: string,
  regionID: string,
  InventoryAmount?: number | null,
};

export type DeleteNewInventoryInput = {
  productID: string,
  warehouseID: string,
  regionID: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelSomethingFilterInput = {
  id?: ModelIDInput | null,
  whatabout?: ModelStringInput | null,
  and?: Array< ModelSomethingFilterInput | null > | null,
  or?: Array< ModelSomethingFilterInput | null > | null,
  not?: ModelSomethingFilterInput | null,
};

export type ModelSomethingConnection = {
  __typename: "ModelSomethingConnection",
  items:  Array<Something | null >,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelInventoryFilterInput = {
  productID?: ModelIDInput | null,
  warehouseID?: ModelIDInput | null,
  InventoryAmount?: ModelIntInput | null,
  and?: Array< ModelInventoryFilterInput | null > | null,
  or?: Array< ModelInventoryFilterInput | null > | null,
  not?: ModelInventoryFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelInventoryConnection = {
  __typename: "ModelInventoryConnection",
  items:  Array<Inventory | null >,
  nextToken?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
  projectTeamId?: ModelIDInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items:  Array<Team | null >,
  nextToken?: string | null,
};

export type ModelNewInventoryPrimaryCompositeKeyConditionInput = {
  eq?: ModelNewInventoryPrimaryCompositeKeyInput | null,
  le?: ModelNewInventoryPrimaryCompositeKeyInput | null,
  lt?: ModelNewInventoryPrimaryCompositeKeyInput | null,
  ge?: ModelNewInventoryPrimaryCompositeKeyInput | null,
  gt?: ModelNewInventoryPrimaryCompositeKeyInput | null,
  between?: Array< ModelNewInventoryPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelNewInventoryPrimaryCompositeKeyInput | null,
};

export type ModelNewInventoryPrimaryCompositeKeyInput = {
  warehouseID?: string | null,
  regionID?: string | null,
};

export type ModelNewInventoryFilterInput = {
  productID?: ModelIDInput | null,
  warehouseID?: ModelIDInput | null,
  regionID?: ModelIDInput | null,
  InventoryAmount?: ModelIntInput | null,
  and?: Array< ModelNewInventoryFilterInput | null > | null,
  or?: Array< ModelNewInventoryFilterInput | null > | null,
  not?: ModelNewInventoryFilterInput | null,
};

export type ModelNewInventoryConnection = {
  __typename: "ModelNewInventoryConnection",
  items:  Array<NewInventory | null >,
  nextToken?: string | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  Array< {
      __typename: "Comment",
      id: string,
      content?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  Array< {
      __typename: "Comment",
      id: string,
      content?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  Array< {
      __typename: "Comment",
      id: string,
      content?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSomethingMutationVariables = {
  input: CreateSomethingInput,
  condition?: ModelSomethingConditionInput | null,
};

export type CreateSomethingMutation = {
  createSomething?:  {
    __typename: "Something",
    id: string,
    whatabout?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSomethingMutationVariables = {
  input: UpdateSomethingInput,
  condition?: ModelSomethingConditionInput | null,
};

export type UpdateSomethingMutation = {
  updateSomething?:  {
    __typename: "Something",
    id: string,
    whatabout?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSomethingMutationVariables = {
  input: DeleteSomethingInput,
  condition?: ModelSomethingConditionInput | null,
};

export type DeleteSomethingMutation = {
  deleteSomething?:  {
    __typename: "Something",
    id: string,
    whatabout?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInventoryMutationVariables = {
  input: CreateInventoryInput,
  condition?: ModelInventoryConditionInput | null,
};

export type CreateInventoryMutation = {
  createInventory?:  {
    __typename: "Inventory",
    productID: string,
    warehouseID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInventoryMutationVariables = {
  input: UpdateInventoryInput,
  condition?: ModelInventoryConditionInput | null,
};

export type UpdateInventoryMutation = {
  updateInventory?:  {
    __typename: "Inventory",
    productID: string,
    warehouseID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInventoryMutationVariables = {
  input: DeleteInventoryInput,
  condition?: ModelInventoryConditionInput | null,
};

export type DeleteInventoryMutation = {
  deleteInventory?:  {
    __typename: "Inventory",
    productID: string,
    warehouseID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNewInventoryMutationVariables = {
  input: CreateNewInventoryInput,
  condition?: ModelNewInventoryConditionInput | null,
};

export type CreateNewInventoryMutation = {
  createNewInventory?:  {
    __typename: "NewInventory",
    productID: string,
    warehouseID: string,
    regionID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNewInventoryMutationVariables = {
  input: UpdateNewInventoryInput,
  condition?: ModelNewInventoryConditionInput | null,
};

export type UpdateNewInventoryMutation = {
  updateNewInventory?:  {
    __typename: "NewInventory",
    productID: string,
    warehouseID: string,
    regionID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNewInventoryMutationVariables = {
  input: DeleteNewInventoryInput,
  condition?: ModelNewInventoryConditionInput | null,
};

export type DeleteNewInventoryMutation = {
  deleteNewInventory?:  {
    __typename: "NewInventory",
    productID: string,
    warehouseID: string,
    regionID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  Array< {
      __typename: "Comment",
      id: string,
      content?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSomethingQueryVariables = {
  id: string,
};

export type GetSomethingQuery = {
  getSomething?:  {
    __typename: "Something",
    id: string,
    whatabout?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSomethingsQueryVariables = {
  filter?: ModelSomethingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSomethingsQuery = {
  listSomethings?:  {
    __typename: "ModelSomethingConnection",
    items:  Array< {
      __typename: "Something",
      id: string,
      whatabout?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInventoryQueryVariables = {
  productID: string,
  warehouseID: string,
};

export type GetInventoryQuery = {
  getInventory?:  {
    __typename: "Inventory",
    productID: string,
    warehouseID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInventoriesQueryVariables = {
  productID?: string | null,
  warehouseID?: ModelIDKeyConditionInput | null,
  filter?: ModelInventoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListInventoriesQuery = {
  listInventories?:  {
    __typename: "ModelInventoryConnection",
    items:  Array< {
      __typename: "Inventory",
      productID: string,
      warehouseID: string,
      InventoryAmount: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectTeamId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNewInventoryQueryVariables = {
  productID: string,
  warehouseID: string,
  regionID: string,
};

export type GetNewInventoryQuery = {
  getNewInventory?:  {
    __typename: "NewInventory",
    productID: string,
    warehouseID: string,
    regionID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNewInventoriesQueryVariables = {
  productID?: string | null,
  warehouseIDRegionID?: ModelNewInventoryPrimaryCompositeKeyConditionInput | null,
  filter?: ModelNewInventoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListNewInventoriesQuery = {
  listNewInventories?:  {
    __typename: "ModelNewInventoryConnection",
    items:  Array< {
      __typename: "NewInventory",
      productID: string,
      warehouseID: string,
      regionID: string,
      InventoryAmount: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  Array< {
      __typename: "Comment",
      id: string,
      content?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  Array< {
      __typename: "Comment",
      id: string,
      content?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  Array< {
      __typename: "Comment",
      id: string,
      content?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  Array< {
        __typename: "Comment",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSomethingSubscription = {
  onCreateSomething?:  {
    __typename: "Something",
    id: string,
    whatabout?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSomethingSubscription = {
  onUpdateSomething?:  {
    __typename: "Something",
    id: string,
    whatabout?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSomethingSubscription = {
  onDeleteSomething?:  {
    __typename: "Something",
    id: string,
    whatabout?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInventorySubscription = {
  onCreateInventory?:  {
    __typename: "Inventory",
    productID: string,
    warehouseID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInventorySubscription = {
  onUpdateInventory?:  {
    __typename: "Inventory",
    productID: string,
    warehouseID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInventorySubscription = {
  onDeleteInventory?:  {
    __typename: "Inventory",
    productID: string,
    warehouseID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNewInventorySubscription = {
  onCreateNewInventory?:  {
    __typename: "NewInventory",
    productID: string,
    warehouseID: string,
    regionID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNewInventorySubscription = {
  onUpdateNewInventory?:  {
    __typename: "NewInventory",
    productID: string,
    warehouseID: string,
    regionID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNewInventorySubscription = {
  onDeleteNewInventory?:  {
    __typename: "NewInventory",
    productID: string,
    warehouseID: string,
    regionID: string,
    InventoryAmount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
