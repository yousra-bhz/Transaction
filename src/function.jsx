function Compo (props) {
    return(
        <div  className="users" key={props.userName}>
            <h4>The user Name is :{props.userName} </h4>
            <h4>The credit of the User is currently :{props.credite} $</h4>
          </div>
    )

    
}

export default Compo;