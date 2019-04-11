
import time

# func definitions


def runImmediately():
    print("I ran immediately")


def runAfter2Sec():
    time.sleep(2)
    print("I ran after 2 seconds")


def runAfter5Sec():
    time.sleep(5)
    print("I ran after 5 seconds")


# invoking / calling
runImmediately()
runAfter5Sec()
runAfter2Sec()
