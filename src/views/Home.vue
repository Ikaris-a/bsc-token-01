<!-- eslint-disable  -->
<template>
  <div class="home_content">
    <div id="header">
      <div class="content fn-clear">
        <img
          class="fl logo"
          :src="require('./../assets/images/logo.png')"
          alt=""
        />
        <a href="" class="fr btns">{{
          interceptAccount ? interceptAccount : "Connect Wallet"
        }}</a>
        <ul class="fr">
          <!-- <li class="fl"><a href="">Ecosystem</a></li> -->
          <li class="fl">
            <a href="https://exchange.pancakeswap.finance/#/swap?inputCurrency="
              >Buy</a
            >
          </li>
          <!-- <li class="fl"><a href="">NECSWAP</a></li> -->
          <!-- <li class="fl"><a href="">Art</a></li> -->
          <!-- <li class="fl"><a href="">Rescue</a></li> -->
          <li class="fl"><a href="">Community</a></li>
        </ul>
      </div>
    </div>
    <div class="topbanner">
      <img
        :src="require('./../assets/images/logo_banner.png')"
        class="logo"
        alt=""
      />
      <div class="contxt">
        <p class="tit">Network Estate Chain</p>
        <p class="desc">
          Decentralized Meme Tokens that grew into a vibrant ecosystem NEC. Fun
          tokens. Artist incubator.Growing 440k+ Community& more on the horizon!
        </p>
        <a href="http://www.nectoken.finance/NetworkEstateChain-White-Paper.pdf" class="btns hover h5_btns">White Paper</a>
      </div>
    </div>
    <div class="box1 btn-group">
      <div class="png">
        <img :src="require('./../assets/images/pic_BNB.png')" alt="" />
      </div>
      <div class="btn">
        <a href="" class="btns hover h5_btns">
          <img :src="require('./../assets/images/icon_receive.png')" alt="" />
          Receive BNB
        </a>
      </div>
    </div>
    <div class="box2">
      <ul class="tit">
        <li>My superior</li>
        <li>Reward</li>
      </ul>
      <ul class="line">
        <li>0x1BE31032C039be3D1e4130bbAf81dD78fd5016b1</li>
        <li>165.61BNB</li>
      </ul>
      <ul class="line">
        <li>0x1BE31032C039be3D1e4130bbAf81dD78fd5016b1</li>
        <li>165.61BNB</li>
      </ul>
      <ul class="line">
        <li>0x1BE31032C039be3D1e4130bbAf81dD78fd5016b1</li>
        <li>165.61BNB</li>
      </ul>
      <ul class="line">
        <li>0x1BE31032C039be3D1e4130bbAf81dD78fd5016b1</li>
        <li>165.61BNB</li>
      </ul>
      <ul class="line">
        <li>0x1BE31032C039be3D1e4130bbAf81dD78fd5016b1</li>
        <li>165.61BNB</li>
      </ul>
      <ul class="line">
        <li>0x1BE31032C039be3D1e4130bbAf81dD78fd5016b1</li>
        <li>165.61BNB</li>
      </ul>
    </div>
    <div class="box3">
      <div class="btn-group conbox">
        <div class="pngnbox">
          <img :src="require('./../assets/images/pic_eco.png')" alt="" />
        </div>
        <div class="contxt btn">
          <p class="tit">ECOSYSTEM</p>
          <p class="desc">
            NEC is an experiment in decentralized spontaneous community
            building. NEC token is our first token and allows users to hold
            Billions or even Trillions of them. Nicknamed the NEC KILLER, this
            ERC-20 ONLY token can remain well under a penny and still outpace
            NECcoin in a small amount of time (relatively speaking). Popular
            worldwide, and already up thousands of percent, NEC token ($NEC) is
            the first cryptocurrency token to be listed and incentivized on
            NECSwap, our decentralized exchange.
          </p>
          <p class="desc">
            W we were the first project following this path, so everyone has to
            buy on the open market, ensuring a fair and complete distribution
            where devs don't own team tokens they can dump on the community.
          </p>
          <div class="btn-group">
            <div class="btn">
              <img
                :src="
                  require('./../assets/images/Liquidity Locked to Uniswap.png')
                "
                alt=""
              />
              <p>Liquidity Locked to Pancakeswap</p>
            </div>
            <div class="btn">
              <img
                :src="require('./../assets/images/First burn to VB.png')"
                alt=""
              />
              <p>First burn to VB</p>
            </div>
            <div class="btn">
              <img
                :src="require('./../assets/images/First burn to VB.png')"
                alt=""
              />
              <p>Second burn to VB</p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-group moretxt">
        <div class="btn">
          <p class="txt">
            It was originally set to be a rebase token pegged to the price of
            Dogecoin. Now, it has been unleashed and will not rebase. With a
            total circulation of ONLY 100,000,000,000 tokens, it has the
            opposite appeal to Shib (which has a much larger supply). The second
            token incentivized on the swap offers special rewards for those who
            provide liquidity.
          </p>
          <p class="tag">——LEASH</p>
        </div>
        <div class="btn">
          <p class="txt">
            NEC It is a value circulation network token developed based on the
            blockchain ERC20, which defines an indivisible, ecological A unique
            interface specification for token interaction and circulation. On
            the blockchain, digital cryptocurrency is divided into two
            categories: native currency and token. The former such as Bitcoin,
            Qtum Etc., has its own main chain and uses transactions on the chain
            to maintain ledger data; the latter such as BOT, INK Etc., attached
            to the existing district Blockchain uses smart contracts to record
            the ledger. Tokens can be divided into two types: homogenization and
            non-homogeneity. Homogeneous tokens, namely FT (Fungible Token),
            with ERC20 and QRC20 It is the basic standard, which can be
            substituted for each other and can be divided into infinitely.
            token. Non-homogeneous tokens, namely NFTs, are unique and
            indivisible tokens, such as encrypted cats, tokenized digital
            tickets, etc.
          </p>
          <p class="tag">——NEC Dogecoin Killer</p>
        </div>
      </div>
    </div>
    <div class="box4 box_f">
      <div class="conbox btn-group">
        <div class="contxt btn">
          <p class="tit">HO​W TO BUY</p>
          <p class="desc">
            We have opened trading at PancakeSwap.<br />
            If you can't trade NEC, please make sure that Expert Mode is turned
            on first. OR Slippage tolerance >=10% In order to ensure the stable
            operation of the project, we have added a deflation mechanism to
            effectively filter robot transactions
          </p>
          <p class="p2 desc">
            <!-- BONE is not available yet , but will be able to acquire soon. -->
          </p>
          <p class="p3 desc">
            See the Live Chart analytics: NEC
          </p>
          <a
            href="https://exchange.pancakeswap.finance/#/swap?inputCurrency="
            class="btns hover h5_btns"
            >BUY NEC</a
          >
        </div>
        <div class="pngnbox">
          <img :src="require('./../assets/images/pic_how to buy.png')" alt="" />
        </div>
      </div>
    </div>
    <div class="box4 box_l">
      <div class="conbox btn-group">
        <div class="pngnbox">
          <img :src="require('./../assets/images/pic_solution.png')" alt="" />
        </div>
        <div class="contxt btn">
          <p class="tit">Solution</p>
          <p class="title">Real estate NFTization</p>
          <p class="desc">
            Due to the unique attributes of real estate, real estate can be
            NFTized. Each real estate is divided into 10,000 equity shares, and
            the NFT can be sold, transferred, pledged, etc.
          </p>
          <p class="title">Simple procedure</p>
          <p class="desc">
            When we buy real estate, we don’t need complicated procedures. We
            directly purchase the corresponding NFT tokens, which means buying
            real estate. The whole process is very simple.
          </p>
          <p class="title">Small investment amount</p>
          <p class="desc">
            NFT the real estate, and then split it into multiple shares.
            Investors can buy a small portion of them, which can make the lowest
            tradable price of the real estate very small and the investment
            amount smaller
          </p>
          <p class="title">Good liquidity</p>
          <p class="desc">
            Real estate demolition is NFT-based, and after it can be split, the
            amount of investment per share becomes smaller, so more people are
            willing to participate in the transaction, and liquidity becomes
            better
          </p>
          <p class="title">Simple transaction process</p>
          <p class="desc">
            People do not need to go overseas to buy overseas real estate, nor
            do they need to find complicated agents to communicate. The entire
            transaction can be carried out online.
          </p>
        </div>
      </div>
    </div>
    <div class="box5">
      <p class="tit tl">The Roadmap</p>
      <div class="conline fn-clear">
        <div class="fl">
          <p class="tag">01</p>
          <img :src="require('./../assets/images/circle_roadmap.png')" alt="" />
          <p class="tit">Initiate crowdfunding</p>
          <p class="desc">
            In the first quarter of 2021, the project launched crowdfunding and
            began preparations
          </p>
        </div>
        <div class="fl">
          <p class="tag">02</p>
          <img :src="require('./../assets/images/circle_roadmap.png')" alt="" />
          <p class="tit">Token online</p>
          <p class="desc">
            Project official website construction, technology deployment, Token
            online
          </p>
        </div>
        <div class="fl">
          <p class="tag">03</p>
          <img :src="require('./../assets/images/circle_roadmap.png')" alt="" />
          <p class="tit">Pledge mining</p>
          <p class="desc">In the third quarter, swap SWAP, LP, pledge mining</p>
        </div>
        <div class="fl">
          <p class="tag">04</p>
          <img :src="require('./../assets/images/circle_roadmap.png')" alt="" />
          <p class="tit">Promote real estate NFT</p>
          <p class="desc">
            NFT trading mainnet is online, and celebrities promote real estate
            NFT
          </p>
        </div>
        <div class="fl">
          <p class="tag">05</p>
          <img :src="require('./../assets/images/circle_roadmap.png')" alt="" />
          <p class="tit">Online transaction</p>
          <p class="desc">Real estate NFT project online transaction</p>
        </div>
      </div>
    </div>
    <div class="box6">
      <p class="tit">NECSWAP</p>
      <p class="desc">
        NECSwap is undergoing security tests, audits and final updates to prepare for a safe launch!
      </p>
      <div class="btn-group">
        <div class="btn">
          <img :src="require('./../assets/images/BEST POSSIBLE .png')" alt="" />
          <p class="tit">
            BEST POSSIBLE<br />
            CROSS-MARKET PRICE
          </p>
          <p class="desc">
            The place to buy or sell NEC is on Pancakeswap. There are some
            centralized exchanges that have listed NEC, but CEXs have a history
            of locking funds.
          </p>
        </div>
        <div class="btn">
          <img :src="require('./../assets/images/POSSIBILITY .png')" alt="" />
          <p class="tit">
            POSSIBILITY<br />
            OF TRUST MANAGEMENT
          </p>
          <p class="desc">
            The only place to buy or sell NEC safely is on Pancakeswap. There
            are some centralized exchanges that have listed NEC, but CEXs have a
            history of locking funds.
          </p>
        </div>
        <div class="btn">
          <img :src="require('./../assets/images/BULIT -IN.png')" alt="" />
          <p class="tit">
            BULIT -IN<br />
            ROBOT MARKET
          </p>
          <p class="desc">
            The only place to buy or sell NEC safely is on Pancakeswap. There
            are some centralized exchanges that have listed NEC, but CEXs have a
            history of locking funds.
          </p>
        </div>
      </div>
      <div class="btn-group">
        <div class="btn">
          <img :src="require('./../assets/images/ONE EXCHANGE.png')" alt="" />
          <p class="tit">
            BULIT -IN<br />
            ROBOT MARKET
          </p>
          <p class="desc">
            The only place to buy or sell NEC safely is on Pancakeswap. There
            are some centralized exchanges that have listed NEC, but CEXs have a
            history of locking funds.
          </p>
        </div>
        <div class="btn">
          <img :src="require('./../assets/images/FULL.png')" alt="" />
          <p class="tit">
            FULL-FILEDGED<br />
            MOBLE TRADING
          </p>
          <p class="desc">
            The only place to buy or sell NEC safely is on Pancakeswap. There
            are some centralized exchanges that have listed NEC, but CEXs have a
            history of locking funds.
          </p>
        </div>
        <div class="btn">
          <img :src="require('./../assets/images/COPY.png')" alt="" />
          <p class="tit">
            COPY TRADING<br />
            AND SINGALS
          </p>
          <p class="desc">
            The only place to buy or sell NEC safely is on Pancakeswap. There
            are some centralized exchanges that have listed NEC, but CEXs have a
            history of locking funds.
          </p>
        </div>
      </div>
    </div>
    <div class="box7">
      <div class="conbox btn-group">
        <div class="pngnbox">
          <img :src="require('./../assets/images/card.png')" alt="" />
        </div>
        <div class="contxt btn">
          <p class="tit tr">RESCUE</p>
          <p class="desc">
            NEC may be the cutest dog breed ever but they aren't the easiest dog
            breed to keep. For this reason, and admittedly very surprisingly,
            many Shibas actually need to be rescued worldwide. For this reason,
            we launched a community effort utilizing the built in Amazon Smile
            feature to donate for this cause. This no cost method allows any NEC
            Inu member to help Rescue Shiba Inus by simply using
            smile.amazon.com when they place orders and put their preferred
            non-profit organization to Shiba Inu Rescue Association a 501(c)3. A
            percentage of your purchases go to support automatically. No cost to
            you! Our power is in community and as a community we can help Rescue
            NECs!
          </p>
        </div>
      </div>
    </div>
    <div class="box8">
      <p class="tit tl">COMMUNITY</p>
      <div class="contxt">
        <p>
          If you'd like to donate to the Devs, send ETH, SHIB or LEASH here.
          Thank you for your support!
          0x1BE31032C039be3D1e4130bbAf81dD78fd5016b1<br /><br />

          Our community keeps growing everyday. Please join our social platforms
          to get updates using the links below. There are 150k+ people in our
          different groups! <br /><br />

          You can connect with us from anywhere in the world because we have
          international groups for foreign language speakers.
        </p>
        <div class="line">
          <a class="btns fl hover"
            >Click here to search for your prefered country!</a
          >
          <div class="fr tag">
            <a href="https://twitter.com/nec_estatd/" class="fl">
              <img :src="require('./../assets/images/3.png')" alt=""
            /></a>
            <!-- <a href="" class="fl">
              <img :src="require('./../assets/images/1.png')" alt=""
            /></a> -->
            <a href="" class="fl">
              <img :src="require('./../assets/images/2.png')" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
    <footer>Copyright ©Network Estate Chain</footer>
  </div>
</template>

<script>
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
