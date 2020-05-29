import os
from selenium.webdriver import Chrome
from selenium.webdriver.support.ui import WebDriverWait

dirname = os.path.dirname(__file__)
browser_path = os.path.join(dirname, 'web-driver/chromedriver')

app_url = "https://bwca.github.io/magic-8-ball/"

Chrome(executable_path=browser_path)

driver = Chrome()

driver.get(app_url)
el = WebDriverWait(driver, 20).until(
    lambda d: d.find_element_by_class_name("canvas"))

el.click()

WebDriverWait(driver, 20).until(
    lambda d: d.find_element_by_css_selector(".answer-container.is-visible"))

answer_text = driver.find_element_by_class_name('answer').text

assert len(answer_text) > 0

print('success!')

driver.quit()
