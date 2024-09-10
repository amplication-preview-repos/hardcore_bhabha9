import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SetModelList } from "./setModel/SetModelList";
import { SetModelCreate } from "./setModel/SetModelCreate";
import { SetModelEdit } from "./setModel/SetModelEdit";
import { SetModelShow } from "./setModel/SetModelShow";
import { DerangementList } from "./derangement/DerangementList";
import { DerangementCreate } from "./derangement/DerangementCreate";
import { DerangementEdit } from "./derangement/DerangementEdit";
import { DerangementShow } from "./derangement/DerangementShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DerangementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SetModel"
          list={SetModelList}
          edit={SetModelEdit}
          create={SetModelCreate}
          show={SetModelShow}
        />
        <Resource
          name="Derangement"
          list={DerangementList}
          edit={DerangementEdit}
          create={DerangementCreate}
          show={DerangementShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
