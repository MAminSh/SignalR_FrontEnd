function LineChart(){
    const [conn ,setConnection] =useState();

    const [times, setTimes] = useState([]);
    const [messages,setMessages ] =useState([]);
  
  
  
  
    const con = async () => {
      console.log("con")
      const connection = new HubConnectionBuilder()
      
      .withUrl("http://localhost:5278/chatHub")
      .build()
       debugger
       connection.on("RandomData",(number)=>{
         console.log(number)
         setMessages(messages=>{
           return [...messages,number]
          });
  
          const newTime = new Date()
         setTimes(prevTimes=>{
           return [...prevTimes,`${newTime.getHours()} : ${newTime.getMinutes()} : ${newTime.getSeconds()} `]
          });
        });
        connection.start().then(() => {
          connection.invoke("GetRandomData").catch(err => console.error(err));
         }).catch(err => console.error(err));
          ;
            
            setConnection(connection);
          }

return(
    <div>LineChart</div>
);


}


export default LineChart;