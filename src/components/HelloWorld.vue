<template>
  <div class="home">
    <div class="title_c">
      <h1>
        RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of Large Language Models
      </h1>
<!--      <h3>-->
<!--        Zekun Moore Wang, Zhongyuan Peng, Haoran Que, Jiaheng Liu, Wangchunshu Zhou, Yuhan Wu, Hongcheng Guo, Ruitong Gan, Zehao Ni, Man Zhang, Zhaoxiang Zhang, Wanli Ouyang, Ke Xu, Wenhu Chen, Jie Fu, Junran Peng-->
<!--      </h3>-->
      <p>
        <name val="Zekun Moore Wang" num="1,9∗"></name>
        <name val="Zhongyuan Peng" num="2∗"></name>
        <name val="Haoran Que" num="1∗"></name>
        <name val="Jiaheng Liu" num="1†"></name>
        <br>
        <name val="Wangchunshu Zhou" num="3"></name>
        <name val="Yuhan Wu" num="4"></name>
        <name val="Hongcheng Guo" num="1"></name>
        <name val="Ruitong Gan" num="5"></name>
        <name val="Zehao Ni" num="2"></name>
        <br>
        <name val="Man Zhang" num="4"></name>
        <name val="Zhaoxiang Zhang" num="6"></name>
        <name val="Wanli Ouyang" num="7"></name>
        <name val="Ke Xu" num="1"></name>
        <name val="Wenhu Chen" num="8"></name>
        <name val="Jie Fu" num="9"></name>
        <name val="Junran Peng" num="2,10"></name>
        <br>
        <company val="Beihang University" num="1"></company>
        <company val="University of the Chinese Academy of Sciences"
                 num="2"></company>
        <company val="ETH Zürich" num="3"></company>
        <br>
        <company val="Beijing University of Posts and Telecommunications"
                 num="4"></company>
        <company val="The Hong Kong Polytechnic University" num="5"></company>
        <br>

        <company val="Institute of Automation, Chinese Academy of Science"
                 num="6"></company>
        <company val="Shanghai AI Lab" num="7"></company>
        <br>
        <company val="University of Waterloo" num="8"></company>
        <company val="The Hong Kong University of Science and Technology"
                 num="9"></company>
        <company val="Chongyue Technology" num="10"></company>
        <br>
        <span style="font-size: 0.8rem;font-weight: 400">
          zenmoore@buaa.edu.cn, liujiaheng@buaa.edu.cn
        </span>


      </p>

      <p class="a_div">
        <span class="a_class">
          <a class="a_text" href="https://arxiv.org/abs/2310.00746">Arxiv</a>
        </span>
        <span class="a_class">
          <a class="a_text" href="">Demo</a>
        </span>
        <span class="a_class">
          <a class="a_text" href="https://arxiv.org/">Data</a>
        </span>
      </p>
    </div>
    <div class="cover">
<!--      <h2>Img</h2>-->
      <img class="img" src="@/assets/img.png" alt="">

    </div>
    <div class="abstract">
      <h2>
        Abstract
      </h2>
      <span class="abstract_text">
The advent of Large Language Models (LLMs) has paved the way for complex tasks such as role-playing, which enhances user interactions by enabling models to imitate various characters. However, the closed-source nature of state-of-the-art LLMs and their general-purpose training limit role-playing optimization. In this paper, we introduce RoleLLM, a framework to benchmark, elicit, and enhance role-playing abilities in LLMs. RoleLLM comprises four stages: (1) Role Profile Construction for 100 roles; (2) Context-Based Instruction Generation (Context-Instruct) for role-specific knowledge extraction; (3) Role Prompting using GPT (RoleGPT) for speaking style imitation; and (4) Role-Conditioned Instruction Tuning (RoCIT) for fine-tuning open-source models along with role customization. By Context-Instruct and RoleGPT, we create RoleBench, the first systematic and fine-grained character-level benchmark dataset for role-playing with 168,093 samples. Moreover, RoCIT on RoleBench yields RoleLLaMA (English) and RoleGLM (Chinese), significantly enhancing role-playing abilities and even achieving comparable results with RoleGPT (using GPT-4).
      </span>
    </div>
    <div class="video">
        <h2>
          Demonstration
        </h2>
<!--      <video class="video-c" src="@/assets/video.mp4" controls="controls">-->
<!--      您的浏览器不支持 video 标签。-->
<!--        </video>-->
      <img class="img" src="@/assets/img_1.png" alt="">
      <img class="img" src="@/assets/img_2.png" alt="">

    </div>
    <div class="method">
      <h2>
        Method
      </h2>
      <p class="text_p">
        The construction of the RoleBench dataset consists of five steps: (1) Role selection; (2) Role profile construction (input); (3) General instruction sampling (input); (4) Generation of raw RoleBench data (output); and (5) Cleaning of RoleBench data.
      </p>
      <p class="text_p">
        1. Role selection. We selected 100 roles, including 5 Chinese roles and 95 English roles, each of which exhibits a unique personality and speaking style.
      </p>
      <p class="text_p">
        2. Role profile construction. The role profile consists of three parts: description, catchphrase, and structured data from the script. The description and catchphrase are generated by GPT-4 and verified by humans. The structured data is parsed by regular expressions according to certain rules, including dialogue content, background, and narration.
      </p>
      <p class="text_p">
        3. General instruction sampling. For the English dataset, we randomly sampled 1500 instructions with a length of no more than 100 words from Super-NaturalInstruct. For the Chinese dataset, we randomly sampled 750 instructions with a length of less than 100 characters from each of the coig and balle datasets. The sampled instructions are deduplicated by the BM_25 method.
      </p>
      <p class="text_p">
        4. Generation of raw RoleBench data. As shown in the figure below, RoleBench consists of two parts: general instruction and role specific instruction. The former is generated by a model that combines the role’s unique speaking style and relevant knowledge, generating 6 responses, one of which is used as a baseline, and 5 as ground truths. The latter is generated by another model based on the actions or plots in the original script, generating 1 response as a ground truth.

      </p>
      <img class="img" src="@/assets/img_3.png" alt="">
      <p class="text_p">
        5. Cleaning of RoleBench data. We cleaned all RoleBench data according to four principles: completeness, AI identity hiding, role identity hiding, and responsiveness. We excluded samples that violated any of these principles.
      </p>


    </div>
    <div class="result">
        <h2>Experimental result</h2>
        <h3>Instruction Generalization</h3>
        <h4 class="text4">
          Rouge-L. English.
        </h4>
        <el-table
            :data="tableData1"
            class="table"
            border
            style="width: 800px">
          <el-table-column
              prop="val1"
              label="Model"
              width="180">
          </el-table-column>
          <el-table-column
              prop="val2"
              label="rouge-l, CUS"
              width="180">
          </el-table-column>
          <el-table-column
              prop="val3"
              label="rouge-l, RAW ">
          </el-table-column>
          <el-table-column
              prop="val4"
              label="rouge-l, SPE"
              width="180">
          </el-table-column>
          <el-table-column
              prop="val5"
              label="ave.">
          </el-table-column>
        </el-table>
      <h4 class="text4">
        Rouge-L. Chinese.
      </h4>
      <el-table
          :data="tableData2"
          class="table"
          border
          style="width: 800px">
        <el-table-column
            prop="val1"
            label="Model"
            width="180">
        </el-table-column>
        <el-table-column
            prop="val2"
            label="rouge-l, CUS"
            width="180">
        </el-table-column>
        <el-table-column
            prop="val3"
            label="rouge-l, RAW ">
        </el-table-column>
        <el-table-column
            prop="val4"
            label="rouge-l, SPE"
            width="180">
        </el-table-column>
        <el-table-column
            prop="val5"
            label="ave.">
        </el-table-column>
      </el-table>



      <h3>Role Generalization</h3>
      <h4 class="text4">
        Rouge-L.
      </h4>
      <el-table
          :data="tableData3"
          class="table"
          border
          style="width: 800px">
        <el-table-column
            prop="val1"
            label="Model"
            width="180">
        </el-table-column>
        <el-table-column
            prop="val2"
            label="rouge-l, CUS"
            width="180">
        </el-table-column>
        <el-table-column
            prop="val3"
            label="rouge-l, RAW ">
        </el-table-column>
        <el-table-column
            prop="val4"
            label="rouge-l, SPE"
            width="180">
        </el-table-column>
        <el-table-column
            prop="val5"
            label="ave.">
        </el-table-column>
      </el-table>






    </div>
    <div class="end1">
      <h2>Safety statement</h2>
      <h4>
        disclaimer: potentially sensitive content
      </h4>
    </div>
    <div class="end2">
      <h2>Open source protocol description</h2>
      <h4>
        apache 2.0 license
      </h4>
    </div>
    <div class="end">
      <h2>BibTeX</h2>
<!--      <div class="BibTeX">-->
<!--        <p class="text_p1">-->
<!--          @misc{wang2023rolellm,-->
<!--        </p>-->
<!--        <p class="text_p1 text_p2">-->
<!--          title={RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of Large Language Models},-->
<!--        </p>-->
<!--        <p class="text_p1 text_p2">-->
<!--          author={Zekun Moore Wang and Zhongyuan Peng and Haoran Que and Jiaheng Liu and Wangchunshu Zhou and Yuhan Wu and Hongcheng Guo and Ruitong Gan and Zehao Ni and Man Zhang and Zhaoxiang Zhang and Wanli Ouyang and Ke Xu and Wenhu Chen and Jie Fu and Junran Peng},-->
<!--        </p>-->
<!--        <p class="text_p1 text_p2">-->
<!--          year={2023},-->
<!--        </p>-->
<!--        <p class="text_p1 text_p2">-->
<!--          eprint={2310.00746},-->
<!--        </p>-->
<!--        <p class="text_p1 text_p2">-->
<!--          archivePrefix={arXiv},-->
<!--        </p>-->
<!--        <p class="text_p1 text_p2">-->
<!--          primaryClass={cs.CL}-->
<!--        </p>-->
<!--        <p class="text_p1 text_p2">-->
<!--          }-->
<!--        </p>-->
<!--      </div>-->
        <div class="code_c">
          <pre>
            <code>
  @misc{wang2023rolellm,
      title={RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of Large Language Models},
      author={Zekun Moore Wang and Zhongyuan Peng and Haoran Que and Jiaheng Liu and Wangchunshu Zhou and Yuhan Wu and Hongcheng Guo and Ruitong Gan and Zehao Ni and Man Zhang and Zhaoxiang Zhang and Wanli Ouyang and Ke Xu and Wenhu Chen and Jie Fu and Junran Peng},
      year={2023},
      eprint={2310.00746},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
  }</code></pre>
    </div>



    </div>
  </div>
</template>

<script>
import name from "./name";
import company from "./company";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    name,
    company
  },
  data() {
    return {
      tableData1:[
        {
          'val1': 'RoleGPT',
          'val2': 0.5764,
          'val3': 0.5322,
          'val4': 0.3229,
          'val5': 0.4772
        },
        {
          'val1': 'LLaMA',
          'val2': 0.1291,
          'val3': 0.1232,
          'val4': 0.2553,
          'val5': 0.1692
        },
        {
          'val1': 'Alpaca',
          'val2': 0.2423,
          'val3': 0.3529,
          'val4': 0.2695,
          'val5': 0.2882
        },
        {
          'val1': 'Vicuna',
          'val2': 0.2101,
          'val3': 0.2550,
          'val4': 0.2913,
          'val5': 0.2521
        },
        {
          'val1': 'LLaMA-script',
          'val2': 0.0832,
          'val3': 0.0509,
          'val4': 0.1081,
          'val5': 0.0807
        },
        {
          'val1': 'RoleLLaMA',
          'val2': 0.3294,
          'val3': 0.3755,
          'val4': 0.3814,
          'val5': 0.3621
        },
      ],
      tableData2:[
        {
          'val1': 'RoleGPT',
          'val2': 0.5368,
          'val3': 0.5748,
          'val4': 0.2478,
          'val5': 0.4531
        },
        {
          'val1': 'ChatGLM',
          'val2': 0.3938,
          'val3': 0.506,
          'val4': 0.3099,
          'val5': 0.4132
        },
        {
          'val1': 'ChatGLM-script',
          'val2': 0.1401,
          'val3': 0.3066,
          'val4': 0.0915,
          'val5': 0.1794
        },
        {
          'val1': 'RoleGLM',
          'val2': 0.5049,
          'val3': 0.5255,
          'val4': 0.3406,
          'val5': 0.4587
        },
      ],
      tableData3:[
        {
          'val1': 'RoleGPT',
          'val2': 0.6020,
          'val3': 0.5322,
          'val4': 0.2985,
          'val5': 0.4776
        },
        {
          'val1': 'LLaMA',
          'val2': 0.2931,
          'val3': 0.1232,
          'val4': 0.2551,
          'val5': 0.2238
        },
        {
          'val1': 'Alpaca',
          'val2': 0.2930,
          'val3': 0.3529,
          'val4': 0.2587,
          'val5': 0.3015
        },
        {
          'val1': 'Vicuna',
          'val2': 0.3200,
          'val3': 0.2550,
          'val4': 0.2775,
          'val5': 0.2842
        },
        {
          'val1': 'RoleLLaMA',
          'val2': 0.4126,
          'val3': 0.4107,
          'val4': 0.2568,
          'val5': 0.3600
        },
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  padding: 10px 100px;
}
.home div,div{
  margin-top: 30px;
}
.title_c{
  padding: 5px 200px;
}
.cover{
  /*border: black 1px solid;*/
  /*height: 300px;*/

}
.a_div{
  display: flex;
  align-items: center;
  justify-content: center;
}
.a_class{
  /*width: 100px!important;*/
  padding: 5px 10px;
  /*height: 30px;*/
  border: black 1px solid;
  /*color: white!important;*/
  background-color: #363636;
  border-radius: 15px;
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
}
.a_text{
  color: white!important;
}

.abstract{
  padding: 10px 30px;
  /*border: black 1px solid;*/
  /*height: 300px;*/
  text-align: center;
  /*background-color: #f5f5f5;*/
  /*border-radius: 10px;*/
}
h2{
  /*background-color: #999999;*/
  border-radius: 5px;
  font-size: 2rem;
  width: 800px;
  margin: 10px auto;
  padding: 5px 0;
}
h1{
  font-size: 3rem;
  width: 800px;
  margin: 0 auto;
}
.abstract_text{
  width: 800px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 400;
  text-align: start;
  display: flex;
}
.video{
  /*border: black 1px solid;*/
  /*height: 300px;*/
  /*display: flex;*/
  /*text-align: center;*/
}
.video-c{
  width: 1152px;
  height: 648px;
  /*display: block;*/
}
.img{
  width: 800px;
  /*height: 400px;*/
  display: block;
  margin: 0 auto;
}
.method{
  width: 800px;
  margin: 0 auto;
  /*border: black 1px solid;*/
  /*height: 300px;*/
}
.text_p{
  /*padding: 0 200px;*/
  font-size: 18px;
  font-weight: 400;
  text-align: start;
  /*display: flex;*/
}
.text_p1{
  /*padding: 0 200px;*/
  font-size: 16px;
  font-weight: 300;
  text-align: start;
  /*display: flex;*/
}
.text_p2{
  padding-left: 55px;
}
.result{
  /*border: black 1px solid;*/
  /*height: 300px;*/
  /*padding: 0 20vw;*/
  width: 800px;
  margin: 0 auto;
}
.table {
  margin-top: 20px!important;
}
.text4{
  margin-top: 20px;
}
.end{
  /*border: black 1px solid;*/
  /*height: 300px;*/
}
.BibTeX{
  width: 60%;
  margin: 0 auto;
  padding: 15px;
  border-radius: 5px;
  background-color: #f5f5f5;
}
.code_c{
  text-align: start!important;
  width: 800px;
  margin: 0 auto;
  background-color: #f5f5f5;
  color: #4a4a4a;
  border-radius: 5px;
  padding: 0 5px;
  overflow-y: auto;
}

</style>
