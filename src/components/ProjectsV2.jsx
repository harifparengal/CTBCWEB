import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Title from "./Title";

const ProjectsV2 = () => {
    const [activeTab, setActiveTab] = useState('All');
    const { isLoading, error, data } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
            return await res.json();
        }
    }
    );

    const projects = data?.filter(x => {
        if (activeTab === 'All')
            return true;
        else
            return x.tag === activeTab;
    }) || [];

    if (isLoading)
        return <div className=" three-quarter-spinner"></div>
    if (error)
        return error.message;

    return (
        <section className="section w-75">
            <Title title={'Featured'} subTitle={'Services'}></Title>

            <div className="projects-tab-container my-32-64">
                <button className={activeTab === 'All' ? 'projects-active-tab projects-tab' : 'projects-tab'} onClick={() => setActiveTab('All')}>All</button>
                <button className={activeTab === 'Ongoing' ? 'projects-active-tab projects-tab' : 'projects-tab'} onClick={() => setActiveTab('Ongoing')}>Ongoing</button>
                <button className={activeTab === 'Completed' ? 'projects-active-tab projects-tab' : 'projects-tab'} onClick={() => setActiveTab('Completed')}>Completed</button>
                <button className={activeTab === 'Impact' ? 'projects-active-tab projects-tab' : 'projects-tab'} onClick={() => setActiveTab('Impact')}>Impact</button>
            </div>

            {projects.length == 0 ? 'No projects of this category found, check back later.' : ''}

            <div className="section-center featured-center">
                {projects.map((project) => {
                    const { _id, img, name, description } = project;
                    return (
                        <article className="tour-card" key={_id}>
                            <div className="tour-img-container">
                                <img src={`data:image/jpeg;base64,${img}`} className="tour-img" alt={name} />
                            </div>
                            <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{name}</h4>
                                </div>
                                <p>{description}</p>
                            </div>
                        </article>
                    );
                })}
                
            </div>
        </section>
    );
};

export default ProjectsV2;