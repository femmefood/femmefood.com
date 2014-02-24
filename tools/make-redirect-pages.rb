require 'csv'

content = <<EOF
---
layout: nil
---
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="refresh" content="0;url=http://www.femmefood.com/" />
  </head>
  <body>
    <h1>Update your bookmarks</h2>
    <p>This page has moved to <a href="http://www.femmefood.com/">http://www.femmefood.com/</a></p>
    {% include ga.html %}
  </body>
</html>
EOF

CSV.foreach("url-new-old-map.csv") do |row|
  a = row[0].match(/([0-9]{4})\/([0-9]{2})\/(.*)/)
  puts "dir: #{a[1]}"
  puts "sub: #{a[2]}"
  `mkdir -p #{a[1]}/#{a[2]}`
  puts "filename: #{a[3]}"
  html = content.gsub("http://www.femmefood.com/", row[1])
  File.open("#{a[1]}/#{a[2]}/#{a[3]}", 'w') {|f| f.write(html) }
end
