import React from 'react';

  const HighScore = ({dataBored, deleteData}) =>{
    // const dataBored = props.dataBored;
    const dataList = dataBored.map(dataScore => {
      return(
        <div className="score" key={dataScore.id}>
          <h2>hey {dataScore.name},  you are {dataScore.age}, your belt {dataScore.belt} <button onClick={ () =>{ deleteData(dataScore.id)}}>X</button > </h2>
        </div>
      )
    })
    return(
      <div>
        {dataList}
      </div>
    );
  }


export default HighScore;
