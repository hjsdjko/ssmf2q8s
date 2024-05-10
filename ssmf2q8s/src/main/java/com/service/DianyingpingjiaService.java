package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DianyingpingjiaEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DianyingpingjiaVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DianyingpingjiaView;


/**
 * 电影评价
 *
 * @author 
 * @email 
 * @date 2021-03-24 09:28:06
 */
public interface DianyingpingjiaService extends IService<DianyingpingjiaEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DianyingpingjiaVO> selectListVO(Wrapper<DianyingpingjiaEntity> wrapper);
   	
   	DianyingpingjiaVO selectVO(@Param("ew") Wrapper<DianyingpingjiaEntity> wrapper);
   	
   	List<DianyingpingjiaView> selectListView(Wrapper<DianyingpingjiaEntity> wrapper);
   	
   	DianyingpingjiaView selectView(@Param("ew") Wrapper<DianyingpingjiaEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DianyingpingjiaEntity> wrapper);
   	
}

