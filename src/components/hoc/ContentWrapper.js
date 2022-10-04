const ContentWrapper = (WrappedComponent) => {
    return ( 
        <div className="container">
            {WrappedComponent}
        </div>
     );
}
 
export default ContentWrapper;