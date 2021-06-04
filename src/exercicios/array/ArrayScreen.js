import CodeBox from "../CodeBox";
import SortScreen from "./sort/SortScreen";
import ReduceScreen from "./reduce/ReduceScreen";
import GeralScreen from "./geral/GeralScreen";

import { getStudents, getInstallments, getColaboradores } from "../Data";

import "../../style.css";

const ArrayScreen = () => (
  <body>
    <div class="row">
      <CodeBox>
        const studentsObj =[
        {getStudents().map((element) => (
          <p>{JSON.stringify(element)}</p>
        ))}
        ]
      </CodeBox>

      <CodeBox>
        const InstallmentsObj =[
        {getInstallments().map((element) => (
          <p>{JSON.stringify(element)}</p>
        ))}
        ]
      </CodeBox>

      <CodeBox>
        const colaboradoresObj =[
        {getColaboradores().map((element) => (
          <p>{JSON.stringify(element)}</p>
        ))}
        ]
      </CodeBox>
    </div>

    <GeralScreen></GeralScreen>

    <ReduceScreen></ReduceScreen>

    <SortScreen></SortScreen>
  </body>
);

export default ArrayScreen;
