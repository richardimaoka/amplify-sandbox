/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          id
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          id
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          id
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comments {
        id
        content
        post {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comments {
        id
        content
        post {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comments {
        id
        content
        post {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          id
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          id
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          id
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSomething = /* GraphQL */ `
  mutation CreateSomething(
    $input: CreateSomethingInput!
    $condition: ModelSomethingConditionInput
  ) {
    createSomething(input: $input, condition: $condition) {
      id
      whatabout
      createdAt
      updatedAt
    }
  }
`;
export const updateSomething = /* GraphQL */ `
  mutation UpdateSomething(
    $input: UpdateSomethingInput!
    $condition: ModelSomethingConditionInput
  ) {
    updateSomething(input: $input, condition: $condition) {
      id
      whatabout
      createdAt
      updatedAt
    }
  }
`;
export const deleteSomething = /* GraphQL */ `
  mutation DeleteSomething(
    $input: DeleteSomethingInput!
    $condition: ModelSomethingConditionInput
  ) {
    deleteSomething(input: $input, condition: $condition) {
      id
      whatabout
      createdAt
      updatedAt
    }
  }
`;
export const createInventory = /* GraphQL */ `
  mutation CreateInventory(
    $input: CreateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    createInventory(input: $input, condition: $condition) {
      productID
      warehouseID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory(
    $input: UpdateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    updateInventory(input: $input, condition: $condition) {
      productID
      warehouseID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory(
    $input: DeleteInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    deleteInventory(input: $input, condition: $condition) {
      productID
      warehouseID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      projectTeamId
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      projectTeamId
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      projectTeamId
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createNewInventory = /* GraphQL */ `
  mutation CreateNewInventory(
    $input: CreateNewInventoryInput!
    $condition: ModelNewInventoryConditionInput
  ) {
    createNewInventory(input: $input, condition: $condition) {
      productID
      warehouseID
      regionID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const updateNewInventory = /* GraphQL */ `
  mutation UpdateNewInventory(
    $input: UpdateNewInventoryInput!
    $condition: ModelNewInventoryConditionInput
  ) {
    updateNewInventory(input: $input, condition: $condition) {
      productID
      warehouseID
      regionID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const deleteNewInventory = /* GraphQL */ `
  mutation DeleteNewInventory(
    $input: DeleteNewInventoryInput!
    $condition: ModelNewInventoryConditionInput
  ) {
    deleteNewInventory(input: $input, condition: $condition) {
      productID
      warehouseID
      regionID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
