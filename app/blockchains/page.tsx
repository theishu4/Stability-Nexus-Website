import Container from "@/components/container"
import CTA from "@/components/cta"
import Card from "@/components/card"

const blockchains = [
  {
    title: "Ergo",
    description: "",
    image: "./blockchains/ergo.svg",
    link: "https://ergoplatform.org/en/",
  },
  {
    title: "Cardano",
    description: "",
    image: "./blockchains/cardano.svg",
    link: "https://cardano.org/",
  },
  {
    title: "Ethereum Classic",
    description: "",
    image: "./blockchains/ethereum-classic.svg",
    link: "https://ethereumclassic.org/",
  },
  {
    title: "Milkomeda",
    description: "",
    image: "./blockchains/milkomeda.svg",
    link: "https://milkomeda.com/",
  },
  {
    title: "Alephium",
    description: "",
    image: "./blockchains/alephium.svg",
    link: "https://alephium.org/",
  },
  {
    title: "Sui",
    description: "",
    image: "./blockchains/sui.svg",
    link: "https://sui.io/",
  }
]

export default function BlockchainsPage() {
  return (
    <div className="relative pt-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
      >
        <div className="h-56 bg-gradient-to-r from-primary via-info to-secondary blur-[100px]"></div>
        <div className="h-56 bg-gradient-to-r from-secondary via-info to-primary blur-[100px]"></div>
      </div>
      <Container>
        <div className="mb-20 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          {blockchains.map((item, index) => (
            <Card 
              index={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </Container>
      <CTA 
        heading="Support Us"
        text="Entities associated with the blockchains listed above have been supporting the work of The Stable Order 
        through benefactions, grants, prizes, awards and sponsorhips. 
        We are grateful for their support, which allowed us to complete numerous funded projects. If you care about stability, support us too."
        link="https://docs.stability.nexus/about-us/fund-us"
        linkText="Fund Us"
      />
    </div>
  )
}
