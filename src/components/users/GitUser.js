import React, { useState } from "react";
import { allUsers } from "../../actions/gitActions";
import { useDispatch, useSelector } from "react-redux";

const GitUser = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState('');
    const data = useSelector(state => state.git.git);
    const error = useSelector(state => state.git.error);
    console.log(data)
    const submit = (e) => {
        e.preventDefault();
        dispatch(allUsers(inputData));
    }
console.log(error);
    return (
        <>
            <div className="git-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-12 mx-auto">
                            <div className="git-single">
                                <form onSubmit={submit}>
                                    <input type="text" placeholder="search github username..." onChange={(e) => setInputData(e.target.value)} /><i className="fa-solid fa-magnifying-glass"></i>
                                    <button type="submit">search</button>
                                </form>
                                <div className="user-bio">
                                    <div className="container">
                                    {error ? <h1 className="error">{error } 👆👆</h1> : <div className="row">
                                            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                                <div className="user-img">
                                                    <a href={`${data.html_url}`} target="_blank">
                                                        <img src={data.avatar_url} alt="user_img" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-12">
                                                <div className="user-bio-content mt-4">
                                                <a href={`${data.html_url}`} target="_blank">
                                                    <h2>{data.name}</h2>
                                                </a>
                                                    <p className="mt-3 bio">{data.bio}</p>
                                                    <div className="follower d-flex mt-5 justify-content-between align-items-center">
                                                        <div className="text-center">
                                                            <a href={`${data.html_url}?tab=repositories`} target="_blank">
                                                                <h3>Repos</h3>
                                                                <p> {data.public_repos} </p>
                                                            </a>
                                                        </div>
                                                        <div className="text-center">
                                                            <a href={`${data.html_url}?tab=followers`} target="_blank">
                                                                <h3>Followers</h3>
                                                                <p> {data.followers} </p>
                                                            </a>
                                                        </div>
                                                        <div className="text-center">
                                                        <a href={`${data.html_url}?tab=following`} target="_blank">
                                                            <h3>Following</h3>
                                                            <p> {data.following} </p>
                                                        </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {data.location && <div className="location mt-4">
                                                    <p><i class="fa-solid fa-location-dot"></i>{data.location}</p>
                                                </div>}
                                                {data.company && <div className="company location">
                                                    <p><i class="fa-solid fa-graduation-cap"></i>{data.company}</p>
                                                </div>}
                                            </div>

                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GitUser;