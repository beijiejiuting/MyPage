(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{473:function(a,t,e){"use strict";e.r(t);var r=e(2),s=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"javaweb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javaweb"}},[a._v("#")]),a._v(" JavaWeb")]),a._v(" "),t("h2",{attrs:{id:"杂项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#杂项"}},[a._v("#")]),a._v(" 杂项")]),a._v(" "),t("p",[a._v('架构: C/S B/S\nInetAddress:获取对象:InetAddress.getByName("")   .getHostName .getHostAddress')]),a._v(" "),t("p",[a._v("URL:协议://主机:端口号/路径?查询参数")]),a._v(" "),t("p",[a._v('SpringBoot骨架(网页/IDEA)\n@Controller/@Service修饰class,自动创建(控制器对象只有一个)\n@RequestMapping("/路径")\n@ResponseBody修饰方法(@Responsebody+@Controller)')]),a._v(" "),t("p",[a._v("控制器处理请求时,自动创建JavaBean")]),a._v(" "),t("h2",{attrs:{id:"tcp-udp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp"}},[a._v("#")]),a._v(" TCP/UDP")]),a._v(" "),t("h3",{attrs:{id:"tcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[a._v("#")]),a._v(" TCP")]),a._v(" "),t("p",[a._v("客户端 Socket(host,port) socket.getOutputStream() os.write() os.close s.socket.close\n服务器 ServerSocket(port) socket=ss.accept() socket.getInputStream() is.close s.socket.close\n结束输入流:socket.shutdownOutput 此时客户端的输入流的read()接收到-1")]),a._v(" "),t("p",[a._v("UUID.randomUUID()")]),a._v(" "),t("h3",{attrs:{id:"udp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[a._v("#")]),a._v(" UDP")]),a._v(" "),t("p",[a._v("new DatagramSocket(随机/指定端口) DatagramPackage(bytes[],length,ip,port)"),t("br"),a._v("\n发送:new DS,new DP,ds.send(dp) ds.close()\n接收:new DS,new DP,ds.receive(dp),dp.get/Data/Length/Address/Port(),ds.close()\n单播\t组播:接收端MuticastSocket,ms.joinGroup(组播地址)\t广播")]),a._v(" "),t("h2",{attrs:{id:"http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[a._v("#")]),a._v(" HTTP")]),a._v(" "),t("p",[a._v("基于TCP,基于请求-响应模型,无状态")]),a._v(" "),t("h3",{attrs:{id:"请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),t("p",[a._v("请求行:GET/POST(请求方式) /src(资源路径) HTTP/x.x(协议)\n请求头:Host:请求的主机  User-Agent:浏览器版本 Accept: */*接受资源类型 Accept-Language/Encoding Content-Type/Length\n请求体(POST)")]),a._v(" "),t("h3",{attrs:{id:"响应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),t("p",[a._v("响应行:HTTP/x.x(协议) 状态码 描述\n状态码:1xx响应中,2xx成功,3xx重定向,4xx客户端错误,5xx服务器错误\n响应头:Content-Type/Length/Encoding Cache-Control Set-Cookie\n响应体(POST):")]),a._v(" "),t("h3",{attrs:{id:"解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[a._v("#")]),a._v(" 解析")]),a._v(" "),t("p",[a._v("使用Tomcat(springboot内嵌)")]),a._v(" "),t("h3",{attrs:{id:"请求响应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求响应"}},[a._v("#")]),a._v(" 请求响应")]),a._v(" "),t("p",[a._v("DispatcherServlet(前端控制器):HttpServletRequest/Response")]),a._v(" "),t("h4",{attrs:{id:"参数接收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数接收"}},[a._v("#")]),a._v(" 参数接收")]),a._v(" "),t("h5",{attrs:{id:"简单参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单参数"}},[a._v("#")]),a._v(" 简单参数")]),a._v(" "),t("p",[a._v("名字对应参数")]),a._v(" "),t("h5",{attrs:{id:"实体参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实体参数"}},[a._v("#")]),a._v(" 实体参数")]),a._v(" "),t("p",[a._v("名字对应对象的属性")]),a._v(" "),t("h5",{attrs:{id:"数组集合参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组集合参数"}},[a._v("#")]),a._v(" 数组集合参数")]),a._v(" "),t("p",[a._v("1,发送多个同名2,用数组/@RequestParam集合接收")]),a._v(" "),t("h5",{attrs:{id:"日期参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日期参数"}},[a._v("#")]),a._v(" 日期参数")]),a._v(" "),t("p",[a._v('@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime')]),a._v(" "),t("h5",{attrs:{id:"json参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json参数"}},[a._v("#")]),a._v(" JSON参数")]),a._v(" "),t("p",[a._v("@RequestBody 对象接收")]),a._v(" "),t("h5",{attrs:{id:"路径参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径参数"}},[a._v("#")]),a._v(" 路径参数")]),a._v(" "),t("p",[a._v("@RequestMapping(/xx/{id}/{name})参数前@PathVariable")]),a._v(" "),t("h4",{attrs:{id:"返回值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[a._v("#")]),a._v(" 返回值")]),a._v(" "),t("p",[a._v("RUSULT设计模式,统一响应结果")]),a._v(" "),t("h3",{attrs:{id:"三层架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三层架构"}},[a._v("#")]),a._v(" 三层架构")]),a._v(" "),t("p",[a._v("Controller->Service->Dao(Data Access Object)")]),a._v(" "),t("h3",{attrs:{id:"解耦"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解耦"}},[a._v("#")]),a._v(" 解耦")]),a._v(" "),t("h4",{attrs:{id:"控制反转ioc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制反转ioc"}},[a._v("#")]),a._v(" 控制反转IOC")]),a._v(" "),t("p",[a._v('@Component对象创建权转移给Spring的容器\n@Component->{@Controller,@Service,@Repository}(value="")\n扫描到的注解才能生效,默认扫描当前包以及子包')]),a._v(" "),t("h4",{attrs:{id:"依赖注入di"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入di"}},[a._v("#")]),a._v(" 依赖注入DI")]),a._v(" "),t("p",[a._v('@Autowired容器提供程序需要的资源(默认按照类型注入)\n@Primary@(Component)优先注入\n@Qualifier("")@Autowired按value注入\n@Resource(name="")按value注入 (provided by JDK)')]),a._v(" "),t("h3",{attrs:{id:"http会话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http会话"}},[a._v("#")]),a._v(" HTTP会话")]),a._v(" "),t("p",[a._v("用户打开浏览器，访问wb服务器的资源，会话建立，直到有一方断开连接，会话结束。在一次会话中可以包含多次请求和响应")]),a._v(" "),t("h4",{attrs:{id:"会话跟踪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#会话跟踪"}},[a._v("#")]),a._v(" 会话跟踪")]),a._v(" "),t("p",[a._v("服务器需要识别多次请求是否来自于同一浏览器，以便在同一次会话的多次请求间共享数据, 维护浏览器状态")]),a._v(" "),t("h5",{attrs:{id:"会话跟踪方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#会话跟踪方案"}},[a._v("#")]),a._v(" 会话跟踪方案")]),a._v(" "),t("h6",{attrs:{id:"客户端会话跟踪技术-cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端会话跟踪技术-cookie"}},[a._v("#")]),a._v(" 客户端会话跟踪技术：Cookie")]),a._v(" "),t("p",[a._v("服务器响应给客户端一个cookie,保存在客户端,此次会话中,客户端每次请求都会携带cookie")]),a._v(" "),t("h6",{attrs:{id:"服务端会话跟踪技术-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端会话跟踪技术-session"}},[a._v("#")]),a._v(" 服务端会话跟踪技术：Session")]),a._v(" "),t("p",[a._v("服务器保存一些session,使用cookie传递sessionID,通过id获取session内容")]),a._v(" "),t("h6",{attrs:{id:"令牌技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#令牌技术"}},[a._v("#")]),a._v(" 令牌技术")]),a._v(" "),t("p",[a._v("服务端传递令牌给客户端,客户端每次请求携带令牌")]),a._v(" "),t("p",[a._v("JWT令牌(JsonWebToken)定义了一种简洁的、自包含的格式，用于在通信双方以json数据格式安全的传输信息。由于数字签名的存在，这些信息是可靠的。")]),a._v(" "),t("p",[a._v('第一部分：Header((头)，记录令牌类型、签名算法等。例如：{"alg":"HS256","type":"JWT")\n第二部分：Payload(有效载荷)，携带一些自定义信息、默认信息等。例如："id":"1","username":"Tom"門\n第三部分：Signature(签名)，防止Token被篡改、确保安全性。将header、payload,并加入指定秘钥，通过指定签名算法计算而来。')]),a._v(" "),t("p",[a._v("Base64编码头和载荷")]),a._v(" "),t("h4",{attrs:{id:"统一拦截"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#统一拦截"}},[a._v("#")]),a._v(" 统一拦截")]),a._v(" "),t("h5",{attrs:{id:"filter过滤器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filter过滤器"}},[a._v("#")]),a._v(" Filter过滤器")]),a._v(" "),t("p",[a._v("设置拦截路径 doFilter放行")]),a._v(" "),t("h6",{attrs:{id:"过滤器链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过滤器链"}},[a._v("#")]),a._v(" 过滤器链")]),a._v(" "),t("p",[a._v("优先级按照类名自然排序")]),a._v(" "),t("h5",{attrs:{id:"interceptor拦截器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interceptor拦截器"}},[a._v("#")]),a._v(" Interceptor拦截器")]),a._v(" "),t("p",[a._v("Spring框架提供")]),a._v(" "),t("p",[a._v("需要注册")]),a._v(" "),t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[a._v("#")]),a._v(" MySQL")]),a._v(" "),t("h4",{attrs:{id:"sql语句-ddl-dml-dql-dcl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql语句-ddl-dml-dql-dcl"}},[a._v("#")]),a._v(" SQL语句:DDL/DML/DQL/DCL")]),a._v(" "),t("p",[a._v('DDL:(数据库定义)show databases;/create database dbname;/use dbname/select database()/drop database dbname\nDDL:(表操作)create table tbname(字段 类型 [约束not null/unique/primary key(auto_increment) /default/foreign key] [注释],);\nDML:(数据库操作)insert into tbname(字段) values (""),("")/update tbname set  x1=v1,x2=v2 where /delete from dbname where')]),a._v(" "),t("h5",{attrs:{id:"dql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dql"}},[a._v("#")]),a._v(" DQL")]),a._v(" "),t("p",[a._v("select (聚合) from where (groupby having) orderby limit\nselect distinct/a (as) b\nwhere is (not) null/between and/in ()/like '_ %'\n聚合函数:count(*),min(),max(),avg(),sum()\n分组:group by分组 having分组后的过滤条件(可以使用聚合函数) select 分组,聚合\n排序:order by 字段 ASC/DESC,\n分页:limit 起始索引,长度")]),a._v(" "),t("h4",{attrs:{id:"多表设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多表设计"}},[a._v("#")]),a._v(" 多表设计")]),a._v(" "),t("p",[a._v("foreign key")]),a._v(" "),t("h5",{attrs:{id:"一对多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一对多"}},[a._v("#")]),a._v(" 一对多")]),a._v(" "),t("p",[a._v("在多的一方添加外键关联一的一方的主键")]),a._v(" "),t("h5",{attrs:{id:"一对一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一对一"}},[a._v("#")]),a._v(" 一对一")]),a._v(" "),t("p",[a._v("任意一方，添加外键(unique)，关联另外一方的主键。")]),a._v(" "),t("h5",{attrs:{id:"多对多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多对多"}},[a._v("#")]),a._v(" 多对多")]),a._v(" "),t("p",[a._v("使用中间表两个外键分别关联两方的主键")]),a._v(" "),t("h4",{attrs:{id:"多表查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多表查询"}},[a._v("#")]),a._v(" 多表查询")]),a._v(" "),t("h5",{attrs:{id:"内连接-ab交集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内连接-ab交集"}},[a._v("#")]),a._v(" 内连接(AB交集)")]),a._v(" "),t("p",[a._v("显式:from A [inner] join B on 隐式: from tb1,tb2 where(表可以起别名)")]),a._v(" "),t("h5",{attrs:{id:"外连接-a-b-交集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外连接-a-b-交集"}},[a._v("#")]),a._v(" 外连接(A/B+交集)")]),a._v(" "),t("p",[a._v("显式:from A left/right [outer] join B on")]),a._v(" "),t("h5",{attrs:{id:"子查询-嵌套"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子查询-嵌套"}},[a._v("#")]),a._v(" 子查询(嵌套)")]),a._v(" "),t("p",[a._v("标量/列/行/表")]),a._v(" "),t("h4",{attrs:{id:"事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[a._v("#")]),a._v(" 事务")]),a._v(" "),t("h5",{attrs:{id:"acid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acid"}},[a._v("#")]),a._v(" ACID")]),a._v(" "),t("p",[a._v("原子性,一致性,隔离性,持久性")]),a._v(" "),t("h5",{attrs:{id:"事务控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务控制"}},[a._v("#")]),a._v(" 事务控制")]),a._v(" "),t("p",[a._v("start transaction/begin,commit,rollback")]),a._v(" "),t("h5",{attrs:{id:"srping事务管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#srping事务管理"}},[a._v("#")]),a._v(" Srping事务管理")]),a._v(" "),t("p",[a._v("底层通过AOP实现")]),a._v(" "),t("h6",{attrs:{id:"transactional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transactional"}},[a._v("#")]),a._v(" @Transactional")]),a._v(" "),t("p",[a._v("在Service层")]),a._v(" "),t("p",[a._v("默认只有RunTimeException才会rollback,为@Transactional (rollbackFor=Exception.class)配置此属性控制出现何种异常时触发回滚")]),a._v(" "),t("h6",{attrs:{id:"事务传播"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务传播"}},[a._v("#")]),a._v(" 事务传播")]),a._v(" "),t("p",[a._v("@Transactional方法调用了另一个@Transactional方法")]),a._v(" "),t("p",[a._v("Propagation.REQUIRES_NEW/REQUIERED(默认)")]),a._v(" "),t("h4",{attrs:{id:"索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[a._v("#")]),a._v(" 索引")]),a._v(" "),t("p",[a._v("提升查询/排序效率,降低insert,update,delete效率,占空间\nprimary key/unique 自动添加索引")]),a._v(" "),t("h2",{attrs:{id:"mybatis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis"}},[a._v("#")]),a._v(" Mybatis")]),a._v(" "),t("p",[a._v("持久层(Dao)框架,简化JDBC")]),a._v(" "),t("h3",{attrs:{id:"数据库连接池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库连接池"}},[a._v("#")]),a._v(" 数据库连接池")]),a._v(" "),t("p",[a._v("标准接口DataSource:Druid,Hikari(springboot)")]),a._v(" "),t("h3",{attrs:{id:"注解配置sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注解配置sql"}},[a._v("#")]),a._v(" 注解配置SQL")]),a._v(" "),t("h4",{attrs:{id:"crud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crud"}},[a._v("#")]),a._v(" CRUD")]),a._v(" "),t("p",[a._v("@Mapper框架自动生成其修饰的接口的实现类对象(代理对象) 并放到IOC容器当中")]),a._v(" "),t("p",[a._v("在Mapper接口里写方法+@Insert/Select/Update/Delete(\" #/${}\")  #{}不能出现在' '内 使用concat解决")]),a._v(" "),t("h5",{attrs:{id:"参数占位符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数占位符"}},[a._v("#")]),a._v(" 参数占位符")]),a._v(" "),t("p",[a._v("#{}被替换成?生成预编译SQL,传递参数时使用")]),a._v(" "),t("p",[a._v("${}直接拼接到SQL语句(存在SQL注入问题),动态设置表名列表时使用")]),a._v(" "),t("h4",{attrs:{id:"主键返回"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主键返回"}},[a._v("#")]),a._v(" 主键返回")]),a._v(" "),t("p",[a._v('在@Insert上@Options(keyProperty="主键返回到的字段",useGeneratedKeys=true)')]),a._v(" "),t("h4",{attrs:{id:"数据封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据封装"}},[a._v("#")]),a._v(" 数据封装")]),a._v(" "),t("p",[a._v("(数据库字段名和对象属性名不一致时):SQL语句中起别名/@Results手动映射/mybatis驼峰命名自动映射(db中a_b,obj中aB)")]),a._v(" "),t("h3",{attrs:{id:"xml映射配置sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xml映射配置sql"}},[a._v("#")]),a._v(" XML映射配置SQL")]),a._v(" "),t("p",[a._v("xml文件与接口同包同名")]),a._v(" "),t("p",[t("code",[a._v("<")]),a._v("mapper namespace=接口全类名 >")]),a._v(" "),t("p",[t("code",[a._v("<")]),a._v("SQL语句 id=方法名 resultType=单条记录类型 >")]),a._v(" "),t("h4",{attrs:{id:"动态sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态sql"}},[a._v("#")]),a._v(" 动态SQL")]),a._v(" "),t("p",[a._v("动态改变sql语句")]),a._v(" "),t("p",[t("code",[a._v("<")]),a._v("where 自动去除多余的and or 内部没有条件时会去掉where >")]),a._v(" "),t("p",[t("code",[a._v("<")]),a._v('if test="true"才拼接后面的aql语句 >')]),a._v(" "),t("p",[t("code",[a._v("<")]),a._v("set 自动去掉多余的','  >(update语句")]),a._v(" "),t("p",[t("code",[a._v("<")]),a._v('foreach collection="要遍历的集合" item="元素" separator="分隔符" open="开头" close="结尾" >')]),a._v(" "),t("p",[t("code",[a._v("<")]),a._v('sql id="" 自定义sql片段 >')]),a._v(" "),t("p",[t("code",[a._v("<")]),a._v('include refid="" 引用自定义sql片段 / >')]),a._v(" "),t("h2",{attrs:{id:"springaop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springaop"}},[a._v("#")]),a._v(" SpringAOP")]),a._v(" "),t("p",[a._v("Aspect Oriented Programming面向切面编程")]),a._v(" "),t("p",[a._v('@Aspect AOP类\n@Around/Before/After/AfterReturning/AfterThrowing ("切入点表达式")')]),a._v(" "),t("p",[a._v("pre\njoinPoint.proceed();\nafter")]),a._v(" "),t("p",[a._v("连接点：JoinPoint,可以被AOP控制的方法（暗含方法执行时的相关信息）\n通知：Advice,指哪些重复的逻辑，也就是共性功能（最终体现为一个方法）\n切入点：PointCut,匹配连接点的条件，通知仅会在切入点方法执行时被应用\n切面：Aspect,描述通知与切入点的对应关系（通知+切入点）\n目标对象：Target,通知所应用的对象")]),a._v(" "),t("h4",{attrs:{id:"切入点表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切入点表达式"}},[a._v("#")]),a._v(" 切入点表达式")]),a._v(" "),t("h5",{attrs:{id:"引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[a._v("#")]),a._v(" 引用")]),a._v(" "),t("p",[a._v('@Pointcut("切入点表达式")')]),a._v(" "),t("p",[a._v("method()")]),a._v(" "),t("h5",{attrs:{id:"形式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#形式"}},[a._v("#")]),a._v(" 形式")]),a._v(" "),t("h6",{attrs:{id:"execution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execution"}},[a._v("#")]),a._v(" execution")]),a._v(" "),t("p",[a._v("execution([访问修饰符] [返回值包名.类名.] 方法名（方法参数）[throws异常])")]),a._v(" "),t("p",[a._v("*单个通配符 ..多个通配符 可以用&& || !组合")]),a._v(" "),t("h6",{attrs:{id:"annotation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#annotation"}},[a._v("#")]),a._v(" @annotation")]),a._v(" "),t("p",[a._v("@annotation(自定义注解的全类名) 匹配所有加了该自定义注解的方法")]),a._v(" "),t("h4",{attrs:{id:"通知顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通知顺序"}},[a._v("#")]),a._v(" 通知顺序")]),a._v(" "),t("h5",{attrs:{id:"默认"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认"}},[a._v("#")]),a._v(" 默认")]),a._v(" "),t("p",[a._v("优先级按照类名自然排序")]),a._v(" "),t("p",[a._v("目标方法前的通知方法：字母排名靠前的先执行\n目标方法后的通知方法：字母排名靠前的后执行")]),a._v(" "),t("h5",{attrs:{id:"手动指定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动指定"}},[a._v("#")]),a._v(" 手动指定")]),a._v(" "),t("p",[a._v("@Order(数字)加在切面类上来控制顺序")]),a._v(" "),t("p",[a._v("目标方法前的通知方法：数字小的先执行\n目标方法后的通知方法：数字小的后执行")]),a._v(" "),t("h4",{attrs:{id:"连接点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接点"}},[a._v("#")]),a._v(" 连接点")]),a._v(" "),t("p",[a._v("可以获得方法执行时的相关信息，如目标类名、方法名、方法参数等。")]),a._v(" "),t("p",[a._v("对于@Around通知，获取连接点信息只能使用ProceedingJoinPoint\n对于其他四种通知，获取连接点信息只能使用JoinPoint,它是ProceedingJoinPoint的父类型")]),a._v(" "),t("h2",{attrs:{id:"springboot底层原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot底层原理"}},[a._v("#")]),a._v(" SpringBoot底层原理")]),a._v(" "),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),t("h4",{attrs:{id:"配置优先级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置优先级"}},[a._v("#")]),a._v(" 配置优先级")]),a._v(" "),t("p",[a._v("命令行参数>Java系统属性>properties>yml>yaml")]),a._v(" "),t("h4",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),t("p",[a._v("application.properties/yml(主流)/yaml")]),a._v(" "),t("h4",{attrs:{id:"java系统属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java系统属性"}},[a._v("#")]),a._v(" Java系统属性")]),a._v(" "),t("p",[a._v("VM options:-Dserver.port=9000")]),a._v(" "),t("h4",{attrs:{id:"命令行参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行参数"}},[a._v("#")]),a._v(" 命令行参数")]),a._v(" "),t("p",[a._v("Program arguments:--server.port=10010")]),a._v(" "),t("h3",{attrs:{id:"bean管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bean管理"}},[a._v("#")]),a._v(" Bean管理")]),a._v(" "),t("p",[a._v("Bean的默认名字: 类->类名小写 方法->方法名")]),a._v(" "),t("p",[a._v("把一个类@Component,交给IOC容器管理")]),a._v(" "),t("h4",{attrs:{id:"获取bean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取bean"}},[a._v("#")]),a._v(" 获取Bean")]),a._v(" "),t("p",[a._v("默认情况下，Spring项目启动时，会把bean都创建好放在IOC容器中，如果想要主动获取这些bean,可以通过如下方式：")]),a._v(" "),t("h5",{attrs:{id:"根据name获取bean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据name获取bean"}},[a._v("#")]),a._v(" 根据name获取bean:")]),a._v(" "),t("p",[a._v("Object getBean(String name)")]),a._v(" "),t("h5",{attrs:{id:"根据类型获取bean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据类型获取bean"}},[a._v("#")]),a._v(" 根据类型获取bean:")]),a._v(" "),t("T",[a._v("T getBean(Class"),t("T",[a._v("requiredType)\n"),t("h5",{attrs:{id:"根据name获取bean-带类型转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据name获取bean-带类型转换"}},[a._v("#")]),a._v(" 根据name获取bean(带类型转换)：")]),a._v(" "),t("T",[a._v("T getBean(String name,Class"),t("T",[a._v("requiredType)\n"),t("h4",{attrs:{id:"bean的作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bean的作用域"}},[a._v("#")]),a._v(" Bean的作用域")]),a._v(" "),t("p",[a._v("通过@Scope配置")]),a._v(" "),t("p",[a._v("Spring支持五种作用域，后三种在web环境才生效：\nsingleton\n容器内同名称的bean只有个实例（单例）（默认）\nprototype\n每次使用该bean时会创建新的实例（非单例）\nrequest/session/application\n每个请求/会话/应用范围内会创建新的实例")]),a._v(" "),t("p",[a._v("延迟初始化")]),a._v(" "),t("p",[a._v("@Lazy第一次使用时才实例化")]),a._v(" "),t("h4",{attrs:{id:"第三方bean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三方bean"}},[a._v("#")]),a._v(" 第三方Bean")]),a._v(" "),t("p",[a._v("如果要管理的bean对象来自于第三方（不是自定义的），是无法用@Comporent及衍生注解声明bean的，就需要用到@Bean注解。")]),a._v(" "),t("h5",{attrs:{id:"通过方法返回"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过方法返回"}},[a._v("#")]),a._v(" 通过方法返回")]),a._v(" "),t("p",[a._v("写一个配置类@Configuration,在配置类中写方法,返回需要的bean对象,对此方法@Bean,交给IOC容器")]),a._v(" "),t("p",[a._v("通过@Bean注解的name或value属性可以声明bean的名称，如果不指定，默认bean的名称就是方法名。\n如果第三方bean需要依赖其它bean对象，直接在bean定义方法中设置形参即可，容器会根据类型自动装配")]),a._v(" "),t("h3",{attrs:{id:"起步依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#起步依赖"}},[a._v("#")]),a._v(" 起步依赖")]),a._v(" "),t("p",[a._v("maven的依赖传递")]),a._v(" "),t("h3",{attrs:{id:"自动配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动配置"}},[a._v("#")]),a._v(" 自动配置")]),a._v(" "),t("h4",{attrs:{id:"componentscan组件扫描"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#componentscan组件扫描"}},[a._v("#")]),a._v(" @ComponentScan组件扫描")]),a._v(" "),t("p",[a._v("默认只扫描当前包及子包")]),a._v(" "),t("h4",{attrs:{id:"import导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import导入"}},[a._v("#")]),a._v(" @Import导入")]),a._v(" "),t("p",[a._v("使用@Import导入的类会被Spring.加载到IOC容器中")]),a._v(" "),t("p",[a._v("导入普通类/配置类")]),a._v(" "),t("p",[a._v("Importselector接口实现类")]),a._v(" "),t("p",[a._v("实现类重写selectImports方法 返回字符串数组 是要导入的类 可以导入多个 也可以从文件导入")]),a._v(" "),t("p",[a._v("@EnableXXX")]),a._v(" "),t("p",[a._v("第三方依赖提供,封装@Import")]),a._v(" "),t("h4",{attrs:{id:"conditional条件装配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conditional条件装配"}},[a._v("#")]),a._v(" @Conditional条件装配")]),a._v(" "),t("p",[a._v("@ConditionalOnClass:判断环境中是否有对应字节码文件，才注册bean到IOC容器\n@ConditionalOnMissingBean:判断环境中没有对应的bean(类型或名称)，才注册bean到IOC容器 用来声明默认的Bean\n@ConditionalOnProperty:判断配置文件中有对应属性和值，才注册bean到IOC容器")]),a._v(" "),t("h4",{attrs:{id:"自定义starter起步依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义starter起步依赖"}},[a._v("#")]),a._v(" 自定义starter起步依赖")]),a._v(" "),t("p",[a._v("创建starter模块\n创建autoconfigure模块，在starter中引入该模块\n在autoconfigure模块中的定义自动配置功能，并定义自动配置文件META-lNF/spring/Xxx.imports")])])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);