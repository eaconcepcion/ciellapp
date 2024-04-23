import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          At CIELL, we're dedicated to bridging the gap between US soybean farmers and global markets. Our team of experts has years of experience in the agricultural industry and is passionate about providing high-quality soybeans to meet the growing demand worldwide.
          </p>
          <p>
          CIELL was founded by a group of agricultural professionals who saw an opportunity to connect the world's growing demand for soybeans with the high-quality supply from US farmers. We've built a network of relationships with farmers, processors, and customers to ensure that our soybeans meet the highest standards of quality and sustainability.
            </p>
        </div>
      </section>
      <section className="text-center my-16" id="about">
        <SectionHeaders
          mainHeader={'Our Mission'}
          subHeader={'Our mission is to:'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Source high-quality soybeans directly from US farmers
          </p>
          <p>
          Build long-term relationships with our customers and suppliers
          </p>
          <p>
          Provide reliable and efficient logistics and transportation services

          </p>
          <p>
          Support sustainable and responsible agricultural practices
          </p>

        </div>
      </section>
      <section className="text-center my-16" id="about">
        <SectionHeaders
          mainHeader={'Our Values'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Quality: We're committed to sourcing the best soybeans from US farmers
          </p>
          <p>
          Reliability: We pride ourselves on timely and efficient logistics and transportation
          </p>
          <p>
          Sustainability: We support environmentally friendly and socially responsible farming practices
          </p>
          <p>
          Integrity: We operate with transparency and honesty in all our dealings
          </p>

        </div>
      </section>
      <section className="text-center my-16" id="about">
        <SectionHeaders
          mainHeader={'Our Team'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Edison Concepcion, Manager
          </p>
        </div>
      </section>
      <section className="text-center my-16" id="about">
        <SectionHeaders
          mainHeader={'Our Services'}
          subHeader={'We offer a range of services to support our customers\' needs:'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Soybean sourcing and procurement
          </p>
          <p>
          Logistics and transportation management
          </p>
          <p>
          Quality control and inspection
          </p>
          <p>
          Market analysis and price risk management
          </p>
        </div>
      </section>
      <section className="text-center my-16" id="about">
        <SectionHeaders
          mainHeader={'Why Choose Us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Direct access to high-quality US soybeans
          </p>
          <p>
          Competitive pricing and flexible payment terms
          </p>
          <p>
          Reliable and efficient logistics and transportation
          </p>
          <p>
          Commitment to sustainability and social responsibility
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          mainHeader={'Get in touch'}
          subHeader={'Contact us to learn more about our services and how we can help you meet your soybean needs:'}
        />
       <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
           <p>
           Phone: 806 224 5527 
          </p>
          <p>
          Email: CIELLTrading@Gmail.com
          </p>
          <p>
          Email: CIELLCustomerService@Gmail.com
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Thank you for considering CIELL as your partner in sourcing high-quality US soybeans!'}
        />
      </section>
    </>
  )
}
