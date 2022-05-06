
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class ListarObjetos extends Simulation {

  private val httpProtocol = http
    .baseUrl("http://localhost:3000")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""))
    .acceptHeader("*/*")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0")
  
  private val headers_0 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "cross-site"
  )
  
  private val headers_1 = Map(
  		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  		"Upgrade-Insecure-Requests" -> "1"
  )
  
  private val headers_2 = Map("Origin" -> "http://localhost:3000")
  
  private val headers_6 = Map(
  		"If-None-Match" -> """W/"b1c-m+nu/xN+LVSblhs1znY+VXrO4b0"""",
  		"Origin" -> "http://localhost:3000"
  )
  
  private val headers_7 = Map(
  		"If-None-Match" -> """W/"57e-Z6Tpqw3yA8SC0XcXEzTzZEI8x2c"""",
  		"Origin" -> "http://localhost:3000"
  )
  
  private val headers_8 = Map(
  		"If-None-Match" -> """W/"59f-yf6XKKvLwSRsSF8qP2X4dvDrLKQ"""",
  		"Origin" -> "http://localhost:3000"
  )
  
  private val headers_9 = Map(
  		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  		"If-None-Match" -> """W/"733-tyV0hNw6QKKU0us6l1koaLesbhk"""",
  		"Upgrade-Insecure-Requests" -> "1"
  )
  
  private val uri1 = "localhost"
  
  private val uri2 = "https://www.google.com/complete/search"

  private val scn = scenario("ListarObjetos")
    .exec(
      http("request_0")
        .get(uri2 + "?client=firefox&q=lo")
        .headers(headers_0)
    )
    .pause(4)
    .exec(
      http("request_1")
        .get("/")
        .headers(headers_1)
    )
    .pause(1)
    .exec(
      http("request_2")
        .get("http://" + uri1 + ":5000/api/products/list")
        .headers(headers_2)
        .resources(
          http("request_3")
            .get("http://" + uri1 + ":5000/api/products/category=Raquetas")
            .headers(headers_2),
          http("request_4")
            .get("http://" + uri1 + ":5000/api/products/category=Pelotas")
            .headers(headers_2)
        )
    )
    .pause(4)
    .exec(
      http("request_5")
        .get("/raquets")
        .headers(headers_1)
        .resources(
          http("request_6")
            .get("http://" + uri1 + ":5000/api/products/list")
            .headers(headers_6),
          http("request_7")
            .get("http://" + uri1 + ":5000/api/products/category=Raquetas")
            .headers(headers_7),
          http("request_8")
            .get("http://" + uri1 + ":5000/api/products/category=Pelotas")
            .headers(headers_8)
        )
    )
    .pause(2)
    .exec(
      http("request_9")
        .get("/balls")
        .headers(headers_9)
        .resources(
          http("request_10")
            .get("http://" + uri1 + ":5000/api/products/list")
            .headers(headers_6),
          http("request_11")
            .get("http://" + uri1 + ":5000/api/products/category=Pelotas")
            .headers(headers_8),
          http("request_12")
            .get("http://" + uri1 + ":5000/api/products/category=Raquetas")
            .headers(headers_7)
        )
    )
    .pause(2)
    .exec(
      http("request_13")
        .get("/")
        .headers(headers_9)
        .resources(
          http("request_14")
            .get("http://" + uri1 + ":5000/api/products/list")
            .headers(headers_6),
          http("request_15")
            .get("http://" + uri1 + ":5000/api/products/category=Raquetas")
            .headers(headers_7),
          http("request_16")
            .get("http://" + uri1 + ":5000/api/products/category=Pelotas")
            .headers(headers_8)
        )
    )

	setUp(scn.inject(atOnceUsers(2000))).protocols(httpProtocol)
}
