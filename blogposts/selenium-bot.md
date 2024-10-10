---
title: "Using Python and Selenium to secure a booked out Yosemite campsite"
date: "2024-3-16"
---

I'm planning to join some friends celebrating their anniversary with mountain air and sunshine in Yosemite National Park. Unfortunately, the campsite they're in is super popular and completely booked, but I should 'check every day as people cancel all the time!'.

I was checking every day until I realised there must be an easier way...

Enter Python, Selenium and Telegram.

I hadn't used Selenium before, but after reading the docs and a couple posts on Medium, it seemed like the way to go.

I needed to use a webdriver to access the search form and input my dates. Selenium has multiple methods of accessing `html` elements in the browser, I used the element's ids and Xpath. If the webdriver finds the dates we are looking for, the boolean value of `dates_available` will switch to `True`, and we will use Telegram's API to send a notification.

The parameters I needed to get started were:

```python
# params
url = "https://www.travelyosemite.com/lodging/housekeeping-camp"
options = Options()
# comment line below to see process
# options.add_argument("--headless=new")
arrival_input_id = "container-widget-hero_ArrivalDate"
depart_input_id = "container-widget-hero_DepartureDate"
arrival_date = "5/30/2024"
depart_date = "6/2/2024"
dates_available = False
```

First, the the instance of the webdriver is created:

```python
# access search page
driver = webdriver.Chrome(
    service=ChromeService(ChromeDriverManager().install()), options=options
)
driver.get(url)
```

Once on the browser page, we need to access the date input box on the form and send our desired dates to the element. I ran into difficulty using the `.send_keys()` method, but I was able to successfully input the dates once I made sure the form was clear with `.clear()`.

```python
# input arrival date
arrival_input_element = driver.find_element(By.ID, arrival_input_id)
arrival_input_element.clear()
arrival_input_element.send_keys(arrival_date)

# input depart date
depart_input_element = driver.find_element(By.ID, depart_input_id)
depart_input_element.clear()
depart_input_element.send_keys(depart_date)
```

Now, we access the submit button element of the form and click through to the following page:

```python
# submit form
submit_button_element = driver.find_element(By.XPATH, submit_button_xpath)
submit_button_element.click()
```

To parse the results page, I used a try except block. The Webdriver instance waits for the presence of our search results, and if it is unable to locate it, will throw an Exception.

```python
try:
    # wait until available dates element loads
    avail_dates_element = wait.until(
        EC.visibility_of_element_located((By.XPATH, avail_dates_xpath))
    )
    avail_dates_string = avail_dates_element.get_attribute("innerHTML")
    print("avail dates: ", avail_dates_string)
    dates_available = True
    return dates_available

except Exception:
    no_results_id = "box-results-empty-outer"
    no_results_element = driver.find_element(By.ID, no_results_id)
    no_results_string = no_results_element.get_attribute("innerHTML")
    print("no results: ", no_results_string)
    return dates_available
```

If our program returns `dates_available = True`, our `send_message()` function will send a push notification to the Telegram app:

```python
def send_message(url):
    dates_available = check_availability()

    if dates_available:
        message = f"Housekeeping Camp has availability!! \n book now: {url}"
        telegram_message_url = f"https://api.telegram.org/bot{BOT_API_KEY}/sendMessage?chat_id={TELEGRAM_CHAT_ID}&text={message}"
        print(requests.get(telegram_message_url).json())
    else:
        print("dates not available")
```

View the full code [here](https://github.com/jrachelr/yosemite-bot).

Happy trails! 🏔️
