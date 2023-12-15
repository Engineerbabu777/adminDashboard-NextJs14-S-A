import { cards } from "@/lib/data";
import Card from "../ui/dashboard/card/Card";

import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";



export default function dashboard({}) {



    return(<>
     <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {/* {cards.map((item) => (<> */}
            <Card  />
            <Card  />
            <Card  />
            {/* </> */}
           {/* ))} */}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
    
    </>)
}