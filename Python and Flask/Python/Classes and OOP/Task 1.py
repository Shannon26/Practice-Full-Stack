class Country:
    AVG_POPULATION = 10

    def __init__(self,country_name, country_code):
        if((type(country_name)==str) and (type(country_code)==str) and (len(country_code)==3)):
            self.country_name = country_name
            self.country_code = country_code
        else:
            raise ValueError

    def country_short_form(self, country_name):
        if((type(country_name)==str) and (len(country_name)>2)):
            res = country_name[0] + country_name[1]
            return res.upper()
        else:
            raise ValueError

    @classmethod
    def is_densly_populated(cls, populated):
        if(type(populated)==int):
            if(populated > cls.AVG_POPULATION):
                return True
            else:
                return False
        else:
            raise ValueError

    @staticmethod
    def world_avg_population(*args):
        lenghtArgs = len(args)
        avg =0
        for i in args:
            if(type(i) == int):
                avg += i
            else:
                raise ValueError
        return avg/lenghtArgs

    @property
    def formatted_country_name(self):
        return "{}({})".format(self.country_name,self.country_code)
    
    @formatted_country_name.setter
    def formatted_country_name(self, string):
        country = string.split("(")
        self.country_name = country[0]
        self.country_code = country[1].replace(")", "")

    @formatted_country_name.deleter
    def formatted_country_name(self):
        del self.country_name
        del self.country_code

res = Country("India", "IND")
print(res.formatted_country_name)
res.formatted_country_name = "England(Eng)"
print(res.formatted_country_name)
