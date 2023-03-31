import React, { useEffect, useState } from "react"
import { List, ScrollView, Heading} from 'native-base';
import server from "../common/server";
import { API } from "../common/constants";
import { useAppDispatch } from '../stores/hooks';
import ActionDetails from "../components/ActionDetails";
import { formatDate } from "../common/util";
import {  StyleSheet } from 'react-native';


function ActionsHistory () {
    const [results, setResults] = useState([])
    const dispatch = useAppDispatch();

    const getUserActions = async () => {
        const resp = await server.get(`${API.actions}/user`, {dispatch});
    
        if(resp.status === 200){
          setResults(resp.data);
        } else {
          throw new Error(`Server responded with status code ${resp.status}`);
        };
      };

    const dateGroups = results.reduce((groups, transaction) => {
        const date = transaction.txDate;
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(transaction);
        return groups;
      }, {});

    console.log("transaction groups:",dateGroups)

    useEffect(() => {
        getUserActions()
      }, []) 


      return (
        <ScrollView>

              {Object.entries(dateGroups).map(([date, transactions]) => (
                <List key={date} style={styles.list}>
                    <Heading style={styles.heading}>{formatDate(date)}</Heading>
                    {transactions.map((transaction, index) => (
                        <ActionDetails key={index} task={transaction.description} points={transaction.points} date={transaction.txDate}/>
                    ))}
                </List>
              ))}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
  list:{
    borderWidth: 0,
  },
  heading: {
    marginLeft: 12,
    fontSize: 20
  }
})

export default ActionsHistory