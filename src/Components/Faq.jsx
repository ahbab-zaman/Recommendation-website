const Faq = () => {
  return (
    <div className="py-4">
      <div className="p-4 text-center">
        <h4 className="text-3xl font-semibold">Frequently Asked Questions</h4>
      </div>

      <div className="w-[80%] mx-auto space-y-2">
        <div
          data-aos="fade-down"
          data-aos-offset="120"
          data-aos-duration="400"
          data-aos-easing="ease-out-cubic"
          className="collapse collapse-plus border-[1px] hover:shadow-xl"
        >
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is included with my purchase of Recommendo?
          </div>

          <div className="collapse-content">
            <ul className="text-lg font-semibold">
              With your purchase of Recommendo, you will receive:
            </ul>
            <ol> &#x2713; 6 months of free professional support.</ol>
            <ol> &#x2713; 8 bundled premium plugins.</ol>
            <ol>
              {" "}
              &#x2713; 109 prebuilt websites, with new sites released regularly.
            </ol>
            <ol>
              {" "}
              &#x2713; Free, consistent, and stable updates to ensure
              compatibility with industry standards & trends.
            </ol>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="120"
          data-aos-duration="400"
          data-aos-easing="ease-out-cubic"
          className="collapse collapse-plus border-[1px] hover:shadow-xl"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are there any recurring fees?
          </div>
          <div className="collapse-content">
            <p>
              No, there are no recurring license fees to use Recommendo. It is a
              one-time purchase that provides you with lifetime updates at no
              extra cost and is valid for life. You can choose to purchase a
              support extension after the initial 6 months of support has
              expired. However, this is entirely optional.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="120"
          data-aos-duration="400"
          data-aos-easing="ease-out-cubic"
          className="collapse collapse-plus border-[1px] hover:shadow-xl"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Where can I get support?
          </div>
          <div className="collapse-content">
            <ul className="text-lg font-semibold">
              Hands-on support with our professional team of support experts is
              accessible 24/7:
            </ul>
            <li>
              {" "}
              To access support you will need to register a support account by
              following these steps.
            </li>
            <li>
              {" "}
              Once your support account is set up, you can submit support
              tickets here.
            </li>
            <li> Learn how to navigate your support account Dashboard here.</li>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="120"
          data-aos-duration="400"
          data-aos-easing="ease-out-cubic"
          className="collapse collapse-plus border-[1px] hover:shadow-xl"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are the prebuilt websites fully customizable?
          </div>
          <div className="collapse-content">
            <p>
              Yes, each prebuilt website is 100% customizable. All prebuilt
              websites are professionally designed by our in-house design team,
              created to showcase Recommendo's capabilities and save you time.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="120"
          data-aos-duration="400"
          data-aos-easing="ease-out-cubic"
          className="collapse collapse-plus border-[1px] hover:shadow-xl"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Why should I trust Avada?
          </div>
          <div className="collapse-content">
            <ul className="text-lg font-semibold">
              Trust is a quality that we take great care to foster and maintain
              by building long-term professional relationships that our
              customers can rely on. Here are some important qualifiers:
            </ul>
            <li>
              We love what we do and who we do it for. Your future is our focus.
            </li>
            <li>
              Free, consistent, and stable updates to ensure compatibility with
              industry standards & trends.
            </li>
            <li>
              Join 999,522 passionate Recommendo customers and build your
              future.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
