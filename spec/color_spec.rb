require File.expand_path '../test_helper.rb', __FILE__
require File.expand_path '../../color.rb', __FILE__

class ColorTest < MiniTest::Unit::TestCase
  def test_hex_color
    color = Color.new 'abc'
    assert color.hex_colors == ["616263"]
  end
end
