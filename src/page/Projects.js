function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>

      <h2>2D Platformer</h2>
      <img src="/2DPlatformer.png" alt="2D Platformer" />
      <p>
        I worked on a 2D platformer in unity which had simple mechanics such as running, jumping and an enemy system that allowed the user to kill the enemies/die to the enemies. 
      </p>

      <h2>3D Unreal Engine Platformer</h2>
      <img src="/3DPlatformer.png" alt="3D Platformer" />
      <p>
        I created a 3D fast paced platformer on unreal engine. it had an easy level and a hard level and introduces new mechanics like moving platforms, falling platforms and a jumpboost to get to higher platforms.
      </p>

      <h2>Unity Pong Recreation</h2>
       <img src="/PongRemake.png" alt="Pong Remake" />
      <p>
        When I first started using Unity again I wanted to recreate a game to get the flow of how the engine works. I recreated pong with two playable players and a scoring system.
      </p>
    </div>
  );
}

export default Projects;