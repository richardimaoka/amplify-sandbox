/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateSomething = /* GraphQL */ `
  subscription OnCreateSomething {
    onCreateSomething {
      id
      whatabout
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSomething = /* GraphQL */ `
  subscription OnUpdateSomething {
    onUpdateSomething {
      id
      whatabout
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSomething = /* GraphQL */ `
  subscription OnDeleteSomething {
    onDeleteSomething {
      id
      whatabout
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory {
    onCreateInventory {
      productID
      warehouseID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory {
    onUpdateInventory {
      productID
      warehouseID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory {
    onDeleteInventory {
      productID
      warehouseID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNewInventory = /* GraphQL */ `
  subscription OnCreateNewInventory {
    onCreateNewInventory {
      productID
      warehouseID
      regionID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNewInventory = /* GraphQL */ `
  subscription OnUpdateNewInventory {
    onUpdateNewInventory {
      productID
      warehouseID
      regionID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNewInventory = /* GraphQL */ `
  subscription OnDeleteNewInventory {
    onDeleteNewInventory {
      productID
      warehouseID
      regionID
      InventoryAmount
      createdAt
      updatedAt
    }
  }
`;
