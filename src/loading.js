export const loadingComponent = (loading, userAnswerTable) => {
    if (loading === false) {
      return (
        userAnswerTable.map((value, index) => (
          <p key={index}>{value}</p>
        ))
      )
    } else if (loading === true) {
      return (
        <div className='loading-main'>
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
        </div>
      )
    } else {
      return
    }
  }