import Score from "./Score";

function Student ({name, bio, scores}) {

    const scoreInfo = scores ? scores.map((ele, index) => {
        return (
            <Score 
            {...ele}
            key = {index}
            />
        );
    }) : <h1>loading</h1>;


    return(
        <>
        <h1>{name}</h1>
        <p>{bio}</p>
        <h3>Date : Score</h3>
        {scoreInfo}
        </>
    )
}

export default Student;