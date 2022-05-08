
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class Login extends Simulation {

  private val httpProtocol = http
    .baseUrl("http://localhost:3000")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""))
    .acceptHeader("*/*")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0")
  
  private val headers_0 = Map(
  		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  		"If-None-Match" -> """W/"733-tyV0hNw6QKKU0us6l1koaLesbhk"""",
  		"Upgrade-Insecure-Requests" -> "1"
  )
  
  private val headers_1 = Map(
  		"If-None-Match" -> """W/"57e-Z6Tpqw3yA8SC0XcXEzTzZEI8x2c"""",
  		"Origin" -> "http://localhost:3000"
  )
  
  private val headers_2 = Map(
  		"If-None-Match" -> """W/"b1c-m+nu/xN+LVSblhs1znY+VXrO4b0"""",
  		"Origin" -> "http://localhost:3000"
  )
  
  private val headers_3 = Map(
  		"If-None-Match" -> """W/"59f-yf6XKKvLwSRsSF8qP2X4dvDrLKQ"""",
  		"Origin" -> "http://localhost:3000"
  )
  
  private val headers_4 = Map(
  		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  		"Upgrade-Insecure-Requests" -> "1"
  )
  
  private val headers_8 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_9 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Wed, 21 Oct 2020 19:31:48 GMT",
  		"If-None-Match" -> """"be3d0f91b7957bbbf8a20859fd32d417"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_10 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:33:02 GMT",
  		"If-None-Match" -> """"48139e5ba1c595568f59fe880d6e4e83"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_11 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:19 GMT",
  		"If-None-Match" -> """"bb45971231bd3501aba1cd07715e4c95"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_12 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:31:52 GMT",
  		"If-None-Match" -> """"c82700fcfcd9b5117176362d25f3e6f6"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_13 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:22 GMT",
  		"If-None-Match" -> """"250acc54f92176775d6bdd8412432d9f"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_14 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:49 GMT",
  		"If-None-Match" -> """"567eaa19be0963b28b000826e8dd6c77"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_15 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:09 GMT",
  		"If-None-Match" -> """"70ba02dedd216430894d29940fc627c2"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_16 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:31:59 GMT",
  		"If-None-Match" -> """"a92a0fffc831e6c20431b070a7d16d5a"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_17 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:15 GMT",
  		"If-None-Match" -> """"11711337d2acc6c6a10e2fb79ac90187"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_18 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:32 GMT",
  		"If-None-Match" -> """"80c49b0f2d195f702e5707ba632ae188"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_19 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:31:43 GMT",
  		"If-None-Match" -> """"6c651609d367b10d1b25ef4c5f2b3318"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_20 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:05 GMT",
  		"If-None-Match" -> """"e95c2d2fc654b87e77b0a8a37aaa7fcf"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_21 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:31:49 GMT",
  		"If-None-Match" -> """"0ed0473b23b5a9e7d1116e8d4d5ca567"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_22 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:12 GMT",
  		"If-None-Match" -> """"4182a69a05463f9c388527a7db4201de"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_23 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:31:55 GMT",
  		"If-None-Match" -> """"df96946198f092c029fd6880e5e6c6ec"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_24 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:35 GMT",
  		"If-None-Match" -> """"37a74ab20e8447abd6ca918b6b39bb04"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_25 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:42 GMT",
  		"If-None-Match" -> """"5b26aca80818dd92509f6a9013c4c662"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_26 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:25 GMT",
  		"If-None-Match" -> """"36689de6804ca5af92224681ee9ea137"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_27 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:31:46 GMT",
  		"If-None-Match" -> """"39b73a66581c5a481a64f4dedf5b4f5c"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_28 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:38 GMT",
  		"If-None-Match" -> """"b1bd26cf5575ebb7ca511a05ea13fbd2"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_29 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:55 GMT",
  		"If-None-Match" -> """"97d4a0fd003e123df601b5fd205e97f8"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_30 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:45 GMT",
  		"If-None-Match" -> """"9899942e9cd28bcb9bf5074800eae2d0"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_31 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:28 GMT",
  		"If-None-Match" -> """"2d69892acde24ad6383082243efa3d37"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_32 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:52 GMT",
  		"If-None-Match" -> """"7a8fd079bb1aeb4710a285ec909c62b9"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_33 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:02 GMT",
  		"If-None-Match" -> """"6ccd943214682ac8c4ec08b7ec6dbcbd"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_34 = Map(
  		"Accept-Encoding" -> "gzip",
  		"If-Modified-Since" -> "Fri, 14 Feb 2020 17:32:59 GMT",
  		"If-None-Match" -> """"ce4e75385300f9c03fdd52420e0f822f"""",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_36 = Map("Origin" -> "http://localhost:3000")
  
  private val uri1 = "https://firefox-settings-attachments.cdn.mozilla.net/main-workspace"
  
  private val uri2 = "localhost"
  
  private val uri3 = "https://firefox.settings.services.mozilla.com/v1"

  private val scn = scenario("Login")
    .exec(
      http("request_0")
        .get("/")
        .headers(headers_0)
        .resources(
          http("request_1")
            .get("http://" + uri2 + ":5000/api/products/category=Raquetas")
            .headers(headers_1),
          http("request_2")
            .get("http://" + uri2 + ":5000/api/products/list")
            .headers(headers_2),
          http("request_3")
            .get("http://" + uri2 + ":5000/api/products/category=Pelotas")
            .headers(headers_3)
        )
    )
    .pause(3)
    .exec(
      http("request_4")
        .get("/login")
        .headers(headers_4)
        .resources(
          http("request_5")
            .get("http://" + uri2 + ":5000/api/products/category=Raquetas")
            .headers(headers_1),
          http("request_6")
            .get("http://" + uri2 + ":5000/api/products/list")
            .headers(headers_2),
          http("request_7")
            .get("http://" + uri2 + ":5000/api/products/category=Pelotas")
            .headers(headers_3)
        )
    )
    .pause(14)
    .exec(
      http("request_8")
        .get(uri3 + "/")
        .headers(headers_8)
        .resources(
          http("request_9")
            .get(uri1 + "/personality-provider-recipe/e4fb5038-c29e-4954-98a0-72a882e4841f.json")
            .headers(headers_9),
          http("request_10")
            .get(uri1 + "/personality-provider-models/170a56ca-c1bf-4181-9b30-693002f7e245.json")
            .headers(headers_10),
          http("request_11")
            .get(uri1 + "/personality-provider-models/06e44aaa-324b-47ac-b458-72e1bccdf86b.json")
            .headers(headers_11),
          http("request_12")
            .get(uri1 + "/personality-provider-models/30c71fa2-8842-419c-89db-addd30268f5b.json")
            .headers(headers_12),
          http("request_13")
            .get(uri1 + "/personality-provider-models/fa731eb2-b049-44bc-a12d-f42f7cea991d.json")
            .headers(headers_13),
          http("request_14")
            .get(uri1 + "/personality-provider-models/2a0dbd55-2eae-44ea-b787-5379594979ff.json")
            .headers(headers_14),
          http("request_15")
            .get(uri1 + "/personality-provider-models/bd6fe48d-f356-4af1-bb7e-4de42b1e6272.json")
            .headers(headers_15),
          http("request_16")
            .get(uri1 + "/personality-provider-models/c2485f5d-8bb1-4a45-a752-efffe9cd55c3.json")
            .headers(headers_16),
          http("request_17")
            .get(uri1 + "/personality-provider-models/281d6a98-5f8e-4bc4-8bae-72e7e16933ca.json")
            .headers(headers_17),
          http("request_18")
            .get(uri1 + "/personality-provider-models/e8645388-afc5-48e3-8f3f-80f82a5353dc.json")
            .headers(headers_18),
          http("request_19")
            .get(uri1 + "/personality-provider-models/47d2bcee-b6c1-464e-a443-e3527d029b0f.json")
            .headers(headers_19),
          http("request_20")
            .get(uri1 + "/personality-provider-models/18f03fe5-a60f-48c5-8cb8-13da750ca395.json")
            .headers(headers_20),
          http("request_21")
            .get(uri1 + "/personality-provider-models/cdd3cdfb-1988-482a-850f-ec02aff07f45.json")
            .headers(headers_21),
          http("request_22")
            .get(uri1 + "/personality-provider-models/a3944b1a-5464-406f-a97e-691702019575.json")
            .headers(headers_22),
          http("request_23")
            .get(uri1 + "/personality-provider-models/61c97d21-6576-4624-aa8b-37839293aebd.json")
            .headers(headers_23),
          http("request_24")
            .get(uri1 + "/personality-provider-models/1db0b78b-42f2-44fd-b78c-43f5fc760fa1.json")
            .headers(headers_24),
          http("request_25")
            .get(uri1 + "/personality-provider-models/393f4033-c815-48d4-bf23-1eb42b4d30db.json")
            .headers(headers_25),
          http("request_26")
            .get(uri1 + "/personality-provider-models/76666027-45db-4baa-8197-6e0f886966a8.json")
            .headers(headers_26),
          http("request_27")
            .get(uri1 + "/personality-provider-models/24538f21-45ca-4dab-addb-65f655a688e2.json")
            .headers(headers_27),
          http("request_28")
            .get(uri1 + "/personality-provider-models/ad749af2-93d7-4bf3-982f-a558175fd806.json")
            .headers(headers_28),
          http("request_29")
            .get(uri1 + "/personality-provider-models/f477331d-33dc-4dfe-be46-88d5223fb439.json")
            .headers(headers_29),
          http("request_30")
            .get(uri1 + "/personality-provider-models/8267a2cc-0984-4410-87db-c02530703a98.json")
            .headers(headers_30),
          http("request_31")
            .get(uri1 + "/personality-provider-models/3fcbb458-7362-47bb-a426-6b542eb2f014.json")
            .headers(headers_31),
          http("request_32")
            .get(uri1 + "/personality-provider-models/5d011771-de98-48f3-8565-7fc1ef6439c3.json")
            .headers(headers_32),
          http("request_33")
            .get(uri1 + "/personality-provider-models/145b9461-d6cc-4341-8d96-ec3bacace059.json")
            .headers(headers_33),
          http("request_34")
            .get(uri1 + "/personality-provider-models/0685a1b5-34eb-4c13-8c90-bc82735e527f.json")
            .headers(headers_34)
        )
    )
    .pause(19)
    .exec(
      http("request_35")
        .get("/orders")
        .headers(headers_4)
        .resources(
          http("request_36")
            .get("http://" + uri2 + ":5000/api/orders/list")
            .headers(headers_36),
          http("request_37")
            .get("http://" + uri2 + ":5000/api/products/list")
            .headers(headers_2),
          http("request_38")
            .get("http://" + uri2 + ":5000/api/products/category=Raquetas")
            .headers(headers_1),
          http("request_39")
            .get("http://" + uri2 + ":5000/api/orderProducts/575f0af6-7484-4a2a-afc7-4d88e6b4db80")
            .headers(headers_36),
          http("request_40")
            .get("http://" + uri2 + ":5000/api/products/category=Pelotas")
            .headers(headers_3),
          http("request_41")
            .get("http://" + uri2 + ":5000/api/orderProducts/113e7cdc-2bd5-487e-b84c-6af0e7146ff9")
            .headers(headers_36),
          http("request_42")
            .get("http://" + uri2 + ":5000/api/orderProducts/21176053-01fb-4ad5-a2dc-5403758ce7fe")
            .headers(headers_36),
          http("request_43")
            .get("http://" + uri2 + ":5000/api/orderProducts/bcfb8ff2-f88a-4521-baf4-e43a7cc2b802")
            .headers(headers_36),
          http("request_44")
            .get("http://" + uri2 + ":5000/api/orderProducts/07c21c74-9670-4480-b738-a9d50d08e8ba")
            .headers(headers_36),
          http("request_45")
            .get("http://" + uri2 + ":5000/api/orderProducts/f3fb93aa-6c8f-49ad-96b2-42fe70a0777c")
            .headers(headers_36),
          http("request_46")
            .get("http://" + uri2 + ":5000/api/orderProducts/72551503-5928-4b58-8ef6-12aefd0e0856")
            .headers(headers_36),
          http("request_47")
            .get("http://" + uri2 + ":5000/api/orderProducts/065408f0-ac8c-4278-bfc9-64f4aa98904c")
            .headers(headers_36),
          http("request_48")
            .get("http://" + uri2 + ":5000/api/orderProducts/75289582-1f8b-480e-ab58-58215736ee31")
            .headers(headers_36),
          http("request_49")
            .get("http://" + uri2 + ":5000/api/orderProducts/551d9472-fe7e-46e7-9207-457cdf7fe4d6")
            .headers(headers_36),
          http("request_50")
            .get("http://" + uri2 + ":5000/api/orderProducts/8b8b8858-130c-4cfd-b7d8-6b6c585f0f15")
            .headers(headers_36),
          http("request_51")
            .get("http://" + uri2 + ":5000/api/orderProducts/9f699c09-f38b-4511-8a83-e341da8f24e8")
            .headers(headers_36),
          http("request_52")
            .get("http://" + uri2 + ":5000/api/orderProducts/4bf940e8-1f36-412e-96f1-ae258711909b")
            .headers(headers_36),
          http("request_53")
            .get("http://" + uri2 + ":5000/api/orderProducts/2c537893-5c78-41b6-83a7-58faa8d41b92")
            .headers(headers_36)
        )
    )

	setUp(scn.inject(atOnceUsers(1000))).protocols(httpProtocol)
}
