<script setup>

function restartForestVideos() {
  const forestVideos = document.querySelectorAll("video[data-key*='forest']");
  forestVideos.forEach(video => {
    video.currentTime = 0;
    video.play();
  });
}

function restartMazeVideos() {
  const mazeVideos = document.querySelectorAll("video[data-key*='maze']");
  mazeVideos.forEach(video => {
    video.currentTime = 0;
    video.play();
  });
}

function restartRealVideos() {
  const realVideos = document.querySelectorAll("video[data-key*='real']");
  realVideos.forEach(video => {
    video.currentTime = 0;
    video.play();
  });
}

</script>


<template>
  <div style="height: 48px;"></div>
    <el-row justify="center" style="margin-bottom: 36px;">
      <el-col :xs="24" :sm="22" :md="22" :lg="20" :xl="16">
        <h1 class="section-title" style="margin-bottom: 28px;">Dynamic Perception and Memory-Enhanced Trajectory Planning for Autonomous Flight in Unknown Environments</h1>
      </el-col>
    </el-row>

  <div>
    <!-- <el-divider /> -->
    <el-row justify="center" style="margin-bottom: 36px;">
        <el-col :xs="24" :sm="20" :md="20" :lg="17" :xl="14">
            <!-- <h1 style="margin-bottom: 20px;">摘要</h1> -->
            <img src="/public/framework.png" alt="Logo" style="width:100%;margin-bottom:12px;border-radius:10px;" />
            <p style="margin-bottom: 16px;">
              This paper proposes an integrated trajectory planning framework for safe autonomous flight in complex unknown environments. 
              The planner leverages a dual-branch neural network that couples the perception of dynamic spatial constraints with trajectory optimization, eliminating the need for expensive semantic recognition or explicit kinematic modeling and enabling supervised training directly from continuous-time physics simulation data.
              We further introduce a lightweight feasible region exploration module that extracts candidate directions through image-plane operations and applies a semi-fixed-axis inscribed ellipsoid expansion, enabling the interpretable selection of optimal directions to improve consistency and reliability. 
              Historical perception information and motion states are cumulatively quantified into a directional entropy map, providing contextual support for long-term decision-making and enabling target-agnostic escape maneuvers to prevent entrapment in infeasible local optima.
              Extensive simulations and real-world experiments demonstrate that the proposed framework achieves millisecond-level collision-free trajectory planning in densely crowded and highly dynamic scenarios.
            </p>
        </el-col>
    </el-row>
  </div>

  <div>
    <el-divider />

    <el-row justify="center">
      <h2 class="section-title" style="margin-bottom: 32px;">Visualization of Trajectories</h2>
    </el-row>

    <el-row justify="center" style="margin-bottom: 56px;">
      <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="14">

        <el-row justify="center" gutter="30">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="display:flex;justify-content:center;">
            <video autoplay loop muted preload playsinline style="width:100%;max-width:600px;aspect-ratio:4/3;border-radius:10px;object-fit:cover;" controlslist="nodownload nofullscreen noremoteplayback noaudio noplaybackrate">
              <source src="/video/0-720P.mp4" type="video/mp4">
            </video>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="display:flex;justify-content:center;">
            <video autoplay loop muted preload playsinline style="width:100%;max-width:600px;aspect-ratio:4/3;border-radius:10px;object-fit:cover;" controlslist="nodownload nofullscreen noremoteplayback noaudio noplaybackrate">
              <source src="/video/1-720P.mp4" type="video/mp4">
            </video>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
  </div>

  <div>
    <el-divider />

    <el-row justify="center">
      <h2 class="section-title" style="margin-bottom: 12px;">Comparative Simulation Experiments</h2>
    </el-row>

    <el-row justify="center" style="margin-bottom: 36px;">
      <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="14">
        <p style="margin-bottom: 24px;">
          A fixed number of static and dynamic obstacles were randomly initialized in a 50×50×8 m³ map. Virtual walls were placed 4 m outside each boundary of the map in the horizontal plane. Two cases were demonstrated, in which the maximum speed of dynamic obstacles was set to 1.0 m/s and 1.5 m/s, respectively. Five UAVs took off simultaneously to perform diagonal traversal tasks, with the maximum velocity and acceleration limited to 3.5 m/s and 3.0 m/s², respectively.
        </p>

        <p style="margin-bottom: 12px;">
          (1) Dynamic Adaptability Test: 80 static square columns, 40 static discs, and 120 cylindrical dynamic obstacles.
        </p>

        <el-row justify="center" gutter="10">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" style="display:flex;justify-content:center;">
            <div style="display:flex;flex-direction:column;align-items:center;width:100%;">
              <p class="p0"> Maximum velocity: 1.0 m/s </p>
              <video key='forest1' data-key='forest1' autoplay loop muted preload playsinline style="width:100%;max-width:700px;aspect-ratio:1/1;border-radius:10px;object-fit:cover;" controlslist="nodownload nofullscreen noremoteplayback noaudio noplaybackrate">
                <source src="/video/forest1-720.mp4" type="video/mp4">
              </video>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" style="display:flex;justify-content:center;">
            <div style="display:flex;flex-direction:column;align-items:center;width:100%;">
              <p class="p0"> Maximum velocity: 1.5 m/s </p>
              <video key='forest2' data-key='forest2' autoplay loop muted preload playsinline style="width:100%;max-width:700px;aspect-ratio:1/1;border-radius:10px;object-fit:cover;" controlslist="nodownload nofullscreen noremoteplayback noaudio noplaybackrate">
                <source src="/video/forest2-720.mp4" type="video/mp4">
              </video>
            </div>
          </el-col>
        </el-row>

        <img src="/public/color.png" alt="obs40" style="width:100%;max-width:700px;object-fit:contain;display:block;margin:auto;" />
        <div style="height: 18px;"></div>
        <el-row justify="center">
          <el-button type="primary" @click="restartForestVideos" class="custom-button">Restart Videos</el-button>
        </el-row>
        
      </el-col>
    </el-row>
  </div>

  <div>

    <el-row justify="center" style="margin-bottom: 36px;">
      <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="14">
        <p style="margin-bottom: 12px;">
          (2) Global Planning Capability Test: 60 walls with center-to-center spacings greater than 4 m and an average width of 7 m, and 80 dynamic cylindrical obstacles.
        </p>
        <el-row justify="center" gutter="10">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" style="display:flex;justify-content:center;">
            <div style="display:flex;flex-direction:column;align-items:center;width:100%;">
              <p class="p0"> Maximum velocity: 1.0 m/s </p>
              <video key='maze1' data-key='maze1' autoplay loop muted preload playsinline style="width:100%;max-width:700px;aspect-ratio:1/1;border-radius:10px;object-fit:cover;" controlslist="nodownload nofullscreen noremoteplayback noaudio noplaybackrate">
                <source src="/video/maze1-720.mp4" type="video/mp4">
              </video>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" style="display:flex;justify-content:center;">
            <div style="display:flex;flex-direction:column;align-items:center;width:100%;">
              <p class="p0"> Maximum velocity: 1.5 m/s </p>
              <video key='maze2' data-key='maze2' autoplay loop muted preload playsinline style="width:100%;max-width:700px;aspect-ratio:1/1;border-radius:10px;object-fit:cover;" controlslist="nodownload nofullscreen noremoteplayback noaudio noplaybackrate">
                <source src="/video/maze2-720.mp4" type="video/mp4">
              </video>
            </div>
          </el-col>
        </el-row>
        <img src="/public/color.png" alt="obs40" style="width:100%;max-width:700px;object-fit:contain;display:block;margin:auto;" />
        <div style="height: 18px;"></div>
        <el-row justify="center">
          <el-button type="primary" @click="restartMazeVideos" class="custom-button">Restart Videos</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>

  <div>
    <el-divider />

    <el-row justify="center">
      <h2 class="section-title" style="margin-bottom: 12px;">Real-World Experiments</h2>
    </el-row>

    <el-row justify="center" style="margin-bottom: 42px;">
      <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="14">
        <p style="margin-bottom: 36px;">
          Two sets of indoor flight experiments involving cubic objects, thin rectangular or circular plates, and human obstacles were conducted. The maximum flight velocity and acceleration were set to 1.0 m/s and 1.0 m/s², respectively. The demonstration videos present handheld follow-behind views, onboard forward-facing views, and localization and mapping results generated by Fast-LIO2.
        </p>

        <el-row justify="center" gutter="20" style="margin-bottom: 16px;">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" style="display:flex;justify-content:center;">
            <video key='real1' data-key='real1' autoplay loop muted preload playsinline style="width:100%;max-width:800px;aspect-ratio:16/9;border-radius:10px;object-fit:cover;" controlslist="nodownload nofullscreen noremoteplayback noaudio noplaybackrate">
              <source src="/video-real/demo1-720P.mp4" type="video/mp4">
            </video>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" style="display:flex;justify-content:center;">
            <video key='real2' data-key='real2' autoplay loop muted preload playsinline style="width:100%;max-width:800px;aspect-ratio:16/9;border-radius:10px;object-fit:cover;" controlslist="nodownload nofullscreen noremoteplayback noaudio noplaybackrate">
              <source src="/video-real/demo2-720P.mp4" type="video/mp4">
            </video>
          </el-col>
        </el-row>
        <p class="p0">
          * The onboard view in the lower-left corner was recorded separately to a TF (microSD) card by a low-frame-rate miniature camera mounted on the UAV. The camera was not connected to the onboard processor, and occasional stuttering may occur due to hardware performance limitations.
        </p>
        <el-row justify="center">
          <el-button type="primary" @click="restartRealVideos" class="custom-button">Restart Videos</el-button>
        </el-row>

      </el-col>
    </el-row>

  </div>

</template>