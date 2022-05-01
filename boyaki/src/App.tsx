import { Authenticator } from "@aws-amplify/ui-react";
import { CognitoUserAmplify } from "@aws-amplify/ui";
import "@aws-amplify/ui-react/styles.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";
import { Amplify } from "aws-amplify";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllPosts } from "./AllPosts";
import "./App.css";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// https://mui.com/material-ui/customization/theming/
// If you are using TypeScript, you would also need to use module augmentation
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1EA1F2",
      contrastText: "#fff",
    },
    background: {
      default: "#15202B",
      paper: "#15202B",
    },
    divider: "#37444C",
  },
  // overrides: {
  //   MuiButton: {
  //     color: "white",
  //   },
  // },
  typography: {
    fontFamily: ["Arial"].join(","),
  },
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) =>
        user && (
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<AllPosts user={user} />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        )
      }
    </Authenticator>
  );
}

export default App;
