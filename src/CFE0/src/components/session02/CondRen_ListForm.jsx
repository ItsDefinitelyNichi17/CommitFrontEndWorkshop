import './CondRen.css'

export function ConditionRendering({ isLoading = false, user, hasError }) {
  if (isLoading) {
    return <div>loading...</div>
  }

  if (!user || hasError) {
     return <div>Error</div>
  }
  return (
    <>
      <div className="profile-card">
        <div className="profile-pic-container">
            <div className = "profile-pic"></div>
        </div>
        <div className = "profile-info">
          <h6>{user}</h6>
          <p>{"CEO"}</p>
        </div>
        <div className="profile-about">
          <p>Hi I am {user} and I love to make an impact</p>
        </div>
      </div>
    </>
  )
}

export function InlineCondition(){
  const isTrue = true
  //condition ? true : false
  return (
    <div style = {{display:'flex', flexDirection:'column'}}>
      {isTrue ? (<div>Is Good</div>) : (<div>Is Bad</div>)}
      { isTrue && (<div>The Journey is the Destination</div>)}
    </div>
  )
}
