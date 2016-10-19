class Color
  attr_reader :name, :numbers

  def initialize name = nil
    @numbers = ''
    @name = name.to_s
  end

  def hex_colors
    name.each_char { |c| numbers << c.ord.to_s(16)  }
    numbers.split(//).each_slice(6).map { |g| g.join.rjust(6, '0') }
  end
end
