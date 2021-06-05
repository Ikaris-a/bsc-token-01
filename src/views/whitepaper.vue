<!-- eslint-disable  -->
<template>
  <div class="home_content">
    <div class="topbanner">
      <img
        :src="require('./../assets/images/logo_banner.png')"
        class="logo"
        alt=""
      />
      <!-- <div class="contxt">
        <p class="tit">NEC</p>

      </div> -->
    </div>
    <div class="white-paper">
      <img class="logo" :src="require('./../assets/images/COPY.png')" alt="" />
      <h2>Network Estate Chain</h2>
      <p>
        Total：100,000,000,000 NEC
        <br />
        We are standing at a pivotal moment in innovatio! In order to maintain
        the stable development of the community, we have set up a recommendation
        mechanism If you are the top 3W address and you invite others to buy,
        you will get it forever 4% reward of the invitee's purchase amount At
        the same time, holders of tokens will get points every day, and you can
        check and collect your income on the website. These very good incentives
      </p>
      <img
        class="logo"
        :src="require('./../assets/images/BULIT -IN.png')"
        alt=""
      />
      <h2>NEC Rules</h2>
      <p>
        Introduction of BSC chain innovation mode play:<br />
        1. 4% of each transaction will be used as a direct push dividend<br />
        2. 2% of each transaction is used as a community reward: holding NEC
        tokens will receive 2% indefinitely and will be divided equally among
        superiors and bnb<br />
        3. 3% of each transaction is used as liquidity return: automatic return,
        liquidity pairs on PancakeSwap, enhance the bottom of the pool, help the
        moon landing, half of the transactions are transferred to BNB, and half
        are used as nec to inject liquidity, permanently locked<br />
        4. 1% of each transaction is permanently penetrated into the black hole
        for destruction lives.
      </p>

      <img
        :src="require('./../assets/images/POSSIBILITY .png')"
        class="logo"
        alt=""
      />
      <h2>Summary</h2>
      <p>
        Blockchain is the underlying technical architecture of a new generation
        of social business application development infrastructure. Its mature
        application will promote global society Changes in business development
        models. The World Economic Forum announced that nearly a hundred central
        banks are currently discussing the application of blockchain technology
        Way, especially at the beginning of the year, the most representative JP
        Morgan Chase and Goldman Sachs officially began to enter the blockchain
        industry, which also marked the district Blockchain technology is
        beginning to enter the global social business application with its own
        decentralization, distributed storage, and non-tamperability. stage. The
        charm of blockchain technology for global users is that it gives value
        to Internet information and builds credibility for global users. Any
        decentralized system. In order to build a complete and effective
        blockchain NFT (Non-Fungible Token) to better endow the circulation
        value network of charitable enterprises protecting animals globally. By
        the top international NEC The founding technical team formed the NEC
        blockchain technology research laboratory with the purpose of starting
        from the design and requirements of the blockchain. Seek to start,
        explore and study the attributes and characteristics of various security
        mechanisms in blockchain technology, and help rare protect rare animals.
        Enterprises and institutions solve multiple challenges from algorithm
        security, protocol security, use security, and system security to help
        "Blockchain+DEFI+NFT" creates the most secure service solutio
      </p>
      <img :src="require('./../assets/images/COPY.png')" class="logo" alt="" />
      <h2>Project</h2>
      <p>
        The global popularization of the Internet has made users all over the
        world truly feel the convenience of information transmission, connecting
        the world through the Internet. Picked it up. However, as the lifestyles
        of global users continue to improve, many people are beginning to be
        dissatisfied with pure Internet information. Information transmission
        function. Many people have begun to demand that the Internet should be
        given value for transmission, so that information transmission has more
        purpose and value. Especially in the past two years, the development
        prospects of global Internet companies are not optimistic. Many large
        and medium-sized Internet companies have no business Development
        direction, began to carry out large-scale layoffs. At the critical stage
        of how the global technology economy develops more deeply, blockchain is
        the most representative technology in the Internet era Innovative
        achievements have attracted the attention of Internet technology
        enthusiasts and digital economy promoters worldwide. After ten years The
        technology precipitation of the blockchain, the core technology of the
        blockchain “enabling” has begun to bring another dimension to all
        aspects of global social application scenarios. Subsequent technological
        changes have promoted the rapid development of global business models
        and digital
      </p>
      <img :src="require('./../assets/images/FULL.png')" class="logo" alt="" />
      <h2>About NEC</h2>
      <p>
        In this era when global real estate is rapidly emerging Many people want
        to invest in real estate because of geographical problems and time.
        Problems, money problems, etc., can not achieve their wishes. A lot of
        people don’t know where to buy transaction fees too High, opaque
        policies, extremes and other issues. Cause them Unable to achieve their
        own investment goals. NEC community is a fun alliance community, the
        first to propose The concept of real estate NFTization, and want to use
        community influence to go Convene more people to join the community, let
        more people pay attention to the NFT of real estate In the future, the
        process of real estate NFTization can finally be realized. We are some
        specific chains that are fully implemented to practical applications The
        community, let the habitual application of some chains, benefit our
        lives.
      </p>
      <div>
        <img
          :src="require('./../assets/images/pic_eco.png')"
          class="logo"
          alt=""
        />
      </div>
      <h2>NEC Planning</h2>
      <p>
        Q1. Project vision Community initial team recruitment Set the basic
        roadmap<br />
        Q2.Community official website construction Community token issuance
        pancake provides liquidity Promotion <br />
        Q3.Increase publicity and promotion Establish a community foundation
        Centralized platform of settled area Enter the centralized platform
        <br />
        Q4.Contact Real Estate Foundation Establish a real estate NFT
        transaction network Promotion <br />
        Q5.Online real estate NFT transaction network Increase publicity and
        promotion<br />
      </p>
      <img
        :src="require('./../assets/images/pic_solution.png')"
        class="logo"
        alt=""
      />
    </div>
  </div>
</template>

<script>
// import "./css/index.css";
import "./css/index.less";
export default {
  props: [],
  data() {
    return {
      routePath: "",
    };
  },
  computed: {
    interceptAccount() {
      const account = this.$store.state.defaultAccount;
      return typeof account === "string"
        ? `${account.substring(0, 4)}...${account.substr(
            account.length - 4,
            account.length
          )}`
        : "";
    },
  },
};
</script>
<style></style>
