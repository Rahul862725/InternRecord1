#  def print_number?
#   loop do
#     puts "come"
#     break if true
# end
# end

# print_number?

# until false
#   puts 'abc'
#   break if true
# end

# def nextCheck
#   i=10
#   until i==0
#     i-=1
#     if i== 3
#       next
#     end
#     puts i
    
#   end
# end
# nextCheck

=begin   // multiline comment
def redoCheck
  i=0
  until i>=4
    i+=1
    puts i
    redo if i==4
  end
end
redoCheck
=end


# def blockuse
#   puts 'method is called'
#   yield 1
#   yield 2
# end
 
# blockuse do |i|
#   puts "block is called inside method"
# end

# BEGIN {
#  puts "start of code"
# }
# END {
#   puts"end of code"
# }

# class SelfYield
#   attr_accessor :pages
#   def initialize
#     yield(self)
#   end
# end

# obj = SelfYield.new do |n|
#   n.pages =23
# end
# puts "variable is #{obj.pages}"


# Module Provide facility of multiple inheritance in ruby. Generally ruby not provide feature of multiple inheritance
=begin
module Name   
   def bella   
   end   
   def ana   
   end   
end   
module Job   
   def editor   
   end   
   def writer   
   end   
end   
  
class Combo   
include Name   
include Job   
   def f   
   end   
end   
  
final=Combo.new   
final.bella   
final.ana   
final.editor   
final.writer   
final.f  
=end

# string 
# msg = "This is testing with string"
# puts msg['t']
# puts msg[0,5]  --> 5 not include
# puts msg[0..5]  --> 5 include
# puts msg[0...5]  --> 5 not include
# puts msg[-1]

# puts 'asdf
# sadf
# asdf'
# puts "asf
# asdf
# asdf"
# puts %/sadf
# asdf
# asf
# asdf/
# puts <<STRING
# sadf
# asdf
# STRING


  
# str = "Original string"   
# str << " is modified "   
# str << "is again modified"   
  
# puts str   
  
# str.freeze   
  
#str << "And here modification will be failed after using freeze method"  

# puts 'abc' == 'abc'
# puts 'Abc'.eql?'abc'
# puts 'Abc'.casecmp'abc'

# Array 
# days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]   
# puts days[0]      
# puts days[10]   
# puts days[-2]     
# puts days[2, 3]   
# puts days[1..7]   
# days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]   
# puts days.first   
# puts days.last

# days <<"Monday"
# days.push("Tuesday")
# days.insert(2,"asdf")

# days.pop
# days.shift
# days.delete(3)
# days.uniq

# days.sort()--> for sroting
# days.unshift("add initialy")  --> add element in intitial of the array
    

    #Hases
# hash1 = {
#   "key1"=>"asdf",
#   "key2"=>"adf"
# }
# puts hash1['key1']

# hash1.each do |key,value|
#   puts "key is #{key} and value is: #{value}"
# end

# puts hash1.include?('key1')  --> return true if key1 is present

# Date
# require 'date'   
  
# d = Date.parse('4th Mar 2017')   
                               
# puts d.year                        
# puts d.mon                         
# puts d.mday                        
# puts  d.wday                        
# puts d += 1                        
# puts d.strftime('%a %d %b %Y')    

# arr = (1..100).to_a
# puts arr
# if arr===2
#   puts arr
# end

# 10.times do |i|
#   puts "sf#{i}"
# end

    #Iterators in ruby
=begin
1. each
2. times
3. 1.upto(3)
4. 10.downto(2)
5. 10.steps(2)
6. str.each_line
=end

#    Exception Handling in ruby
# def raise_and_rescue     
#   begin     
#     puts 'Before the raise.'     
#     raise 'An error occured.'     
#     puts 'After the raise.'     
#   rescue     
#     puts 'Code rescued.'     
#   end     
#   puts 'After the begin block.'     
# end     
# raise_and_rescue  

# begin   
#   code..  
#    #..raise exception  
# rescue   
#    #.. exception is rescued  
# ensure   
#    #.. This code will always execute.  
# end  

# The else clause is always present after rescue clause and before ensure clause. If no exceptions are raised, then only else block is executed.

# Syntax:

# begin   
#    code..   
#    #..raise exception  
# rescue   
#    # .. exception is rescued  
# else  
#    #.. executes if there is no exception  
# ensure   
#    #..  This code will always execute.  
# end  


# The catch and throw method is faster than rescue and raise clauses. Hence, it is more suitable to use.
=begin
def promptAndGet(prompt)   
   print prompt   
   res = readline.chomp   
   throw :quitRequested if res == "!"   
   return res   
end   
  
catch :quitRequested do   
   name = promptAndGet("Name: ")   
   age = promptAndGet("Occupation: ")   
   # ..   
   # process information   
end   
promptAndGet("Name:")  
=end

# class Test
#   attr_accessor :name
#   @@val = []
#   def initialize (name)
#     @@val<<name
#     @name =name
#   end
#   def self.all
#     @@val
#   end
# end
# obj =Test.new("abc")
# obj =Test.new("abc")
# obj =Test.new("abc")
# obj =Test.new("abc")
# obj =Test.new("abc")

# puts  obj.name
# puts Test.all

=begin
class Parent   
  
    def initialize   
        puts "Parent class created"   
    end   
end   
  
class Child < Parent   
  
   def initialize   
       super   
       puts "Child class created"   
   end   
end   
  
Parent.new   
Child.new  
=end
