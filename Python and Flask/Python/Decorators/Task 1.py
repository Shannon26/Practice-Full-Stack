import timeit


def timer(function):
    def new_function():
        start_time = timeit.default_timer()
        print('Function "{name}" took {time} seconds to Start.'.format(name=function.__name__, time=start_time))
        function()
        elapsed = timeit.default_timer() - start_time
        print('Function "{name}" took {time} seconds to complete.'.format(name=function.__name__, time=elapsed))
    return new_function()


@timer
def prime():
    total = 0
    for num in range(2, 100):
        if num > 1:
            for i in range(2, num):
                if (num % i) == 0:
                    break
            else:
                print(num)
