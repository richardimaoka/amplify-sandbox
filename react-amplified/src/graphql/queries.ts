/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSomething = /* GraphQL */ `
  query GetSomething($id: ID!) {
    getSomething(id: $id) {
      id
      whatabout
      createdAt
      updatedAt
    }
  }
`;
export const listSomethings = /* GraphQL */ `
  query ListSomethings(
    $filter: ModelSomethingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSomethings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        whatabout
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInventory = /* GraphQL */ `
  query GetInventory($productID: ID!, $warehouseID: ID!) {
    getInventory(productID: $productID, warehouseID: $warehouseID) {
      productID
      warehouseID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const listInventories = /* GraphQL */ `
  query ListInventories(
    $productID: ID
    $warehouseID: ModelIDKeyConditionInput
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInventories(
      productID: $productID
      warehouseID: $warehouseID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        productID
        warehouseID
        InventoryAmount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNewInventory = /* GraphQL */ `
  query GetNewInventory($productID: ID!, $warehouseID: ID!, $regionID: ID!) {
    getNewInventory(
      productID: $productID
      warehouseID: $warehouseID
      regionID: $regionID
    ) {
      productID
      warehouseID
      regionID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const listNewInventories = /* GraphQL */ `
  query ListNewInventories(
    $productID: ID
    $warehouseIDRegionID: ModelNewInventoryPrimaryCompositeKeyConditionInput
    $filter: ModelNewInventoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNewInventories(
      productID: $productID
      warehouseIDRegionID: $warehouseIDRegionID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        productID
        warehouseID
        regionID
        InventoryAmount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
